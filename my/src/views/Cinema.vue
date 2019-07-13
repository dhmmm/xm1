<template>
    <div> 
        <div class="nav-top">
        <!-- header -->
            <div class="nav-header">
                <h3>影院</h3>
            </div>
        <!-- search -->
            <div class="topbar">
                <div class="city-entry"   @click="goCity"  >
                    <span>{{city}}</span>
                    <span class="iconfont icon-jiantouarrow486"></span>
                </div>
                <div class="search-entry">
                    <span class="iconfont icon-sousuo"></span>  
                    <span>搜影院</span>
                </div>
            </div>

            <div class="mb-line">
                <div  class="mb-line-item"   @click="changeFlag" > 
                    <span>{{curName}}</span>
                    <span class="iconfont icon-jiantouarrow486"></span>
                </div>
                 <div class="mb-line-item"> 
                    <span>品牌</span>
                    <span class="iconfont icon-jiantouarrow486"></span>
                </div>
                 <div class="mb-line-item"> 
                    <span>特色</span>
                    <span class="iconfont icon-jiantouarrow486"></span>
                </div>
                <!-- 区 -->
                <div class="mb-distr" >
                    <ul v-show="flag" >
                        <li v-for="item in  distributs"  class="mb-distr-item" @click="change(item)">{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- cinema list -->
        <div class="cinema-list">
            <!-- 默认全城    filterList为  cinemas-->
            <ul>
                <li v-for="item in filterList">
                    <h3>{{item.name}}</h3>
                    <p>{{item.address}}</p>
                </li>
            </ul>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            city:"",
            cinemas:[],
            distributs:[],  //存储区域
            index:0 ,          //0 全城  非0 其他区域
            curName:"全城",
            flag:false
        }
    },
    methods: {
        goCity(){
              this.$router.push("/city");
        },
        changeFlag(){
            this.flag=!this.flag;
        },
        change(item){
            this.curName=item;
           
            this.changeFlag();
        }
    },
    created() {
        this.city= sessionStorage.getItem("city") || "北京";
        this.$axios.get("/mz/gateway?",{
            params:{
                    cityId:sessionStorage.getItem("cityId"),
                    ticketFlag:1,
                    k:Date.now()
            },
            headers:{
                "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"15624937211163936137873"}`,
                "X-Host":"mall.film-ticket.cinema.list"
            }
        }).then((res)=>{
           // console.log(res);
            this.cinemas=res.data.data.cinemas;
            var set=new Set();
             this.cinemas.forEach((item)=>{
                set.add(item.districtName)
             })
             this.distributs=["全城",...set];   //所有区
        })
        
    },
    computed: {
        filterList(){
            if(this. curName==="全城"){
                return    this.cinemas;
            }else{
                return this.cinemas.filter((item)=>{
                    return item.districtName===this.curName;    
                    //返回  curName项   点击改变curName 改变数组
                })
            }
        }
    },
   
    
}
</script>
<style scoped>
.nav-top{position: fixed;top:0;width: 100%;}
.nav-header{font-size: 0.3rem;text-align: center;line-height: 1rem;
color: #fff;background: #e54847; }
.nav-header h3{font-weight:300;}
.cinema-list{margin-top:3rem;}
.topbar{background: #F5F5F5;}
.city-entry{display: inline-block;line-height: 0.88rem;padding-left:0.3rem;font-size: 0.3rem;}
.city-entry .iconfont {font-size: 0.2rem;}
.search-entry{display: inline-block;width:75%;line-height: 0.56rem;font-size: 0.26rem; margin-left: 0.36rem; border: .5px solid #e6e6e6; border-radius: 5px;
 margin-right: 0.3rem;text-align: center;background: #FEFEFE;}
 .icon-sousuo{font-size: 0.26rem;}
 .mb-line{color: #777; background: #fff;line-height: 0.8rem;font-size: 0.26rem;}
 .icon-jiantouarrow486{font-size: 0.2rem;}
 .mb-line-item{width: 33.3%;display: inline-block;text-align: center;border-bottom:0.5px solid #E8E8E8; }
.mb-distr{padding:0 0 0.3rem 0.1rem;}
.mb-distr-item{display: inline-block;width: 23%;text-align: center;border: 1px solid #ccc; margin: 0.1rem 0.1rem 0 0;}
</style>
