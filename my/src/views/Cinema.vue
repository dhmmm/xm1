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
                 <div class="mb-line-item"   @click="changeFla" > 
                    <span>品牌</span>
                    <span class="iconfont icon-jiantouarrow486"></span>
                </div>
                 <div class="mb-line-item"  @click="changeFl"> 
                    <span>特色</span>
                    <span class="iconfont icon-jiantouarrow486"></span>
                </div>
                <!-- 区 -->
                <div class="mb-distr" >
                    <ul v-show="flag" >
                        <li v-for="item in  distributs"  class="mb-distr-item" @click="change(item)">{{item}}</li>
                    </ul>
                </div>

                <!--brand  -->
                <div class="mb-brand"  v-show="fla">
                    <ul >
                        <li v-for="it in bandList"   class="mb-brand-item"> 
                            <div><p> {{it.name}} </p>  <span>{{it.count}}</span>   </div> 
                        </li>
                    </ul>
                </div>

                <!--special  -->
                <div class="special-content"   v-show="fl">
                    <div class="item-title">特色功能</div>
                    <div class="item-list clear">
                        <div class="item  chosen">全部</div>
                        <div class="item">会员卡</div>
                        <div class="item">可改签</div>
                        <div class="item">可退票</div>
                    </div>
                    <div class="item-title">特殊厅</div>
                    <div class="item-list clear">
                        <div class="item"   v-for="item in hallList">{{item.name}}</div>
                    </div>
                </div>

            </div>
        </div>
        <!-- cinema list -->
        <div class="cinema-list">
            <!-- 默认全城    filterList为  cinemas-->
            <ul>
                <li v-for="item in filterList"   class="cinema-item">
                    <div class="item-title" >
                        <h3>{{item.name}}</h3>
                        <span class="item-price"> <span class="price"> {{ item.lowPrice/100}}</span>   元起</span>
                    </div>
                   <div class="item-location">
                        <div class="item-address"> <p>{{item.address}}</p></div> 
                        <span >{{item.Distance.toFixed(2)}}km</span>
                   </div>
                   <div class="label-block">
                       <div class="allowRefund">退</div>
                       <div  class="endorse">改签</div>
                       <div class="snack"> 小吃</div>
                       <div class="vipTag">折扣卡</div>
                   </div>
                   
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
            flag:false,
            bandList:[],
            hallList:[],
            fla:false,
            fl:false
        }
    },
    methods: {
        goCity(){
              this.$router.push("/city");
        },
        changeFlag(e){
            this.flag=!this.flag;
        },
        changeFla(){
            this.fla=!this.fla;
        },
        changeFl(){
            this.fl=!this.fl;
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
            //console.log(res);
            this.cinemas=res.data.data.cinemas;
            var set=new Set();
             this.cinemas.forEach((item)=>{
                set.add(item.districtName);
             })
             this.distributs=["全城",...set];   //所有区
        })


        var n=Math.ceil(Math.random()*100);
        setTimeout(()=>{
        this.$axios.get("/my/ajax/filterCinemas?ci="+n).then((res)=>{
            //console.log(res);
            this.bandList=res.data.brand.subItems;
            this.hallList=res.data.hallType.subItems;
         })


        },1000)    
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
.mb-distr-item{display: inline-block;width: 23%;text-align: center;border: 0.5px solid #f90; margin: 0.1rem 0.1rem 0 0;line-height:0.54rem; }
.mb-brand{height: 6.9rem;overflow: auto;color: #333;}
.mb-brand-item{line-height: 0.88rem;padding: 0 0.3rem 0 0.52rem;border-bottom: 1px solid #e5e5e5;font-size: 0.3rem;}
.mb-brand-item p,  .mb-brand-item span{width: 48%;display: inline-block;}
.mb-brand-item span{font-size: 0.24rem;color:#8f9296;text-align: right;}

.special-content{background: #fff;}
.special-content .item-title{margin-left: 0.24rem;margin-top: 0.22rem;font-size: 0.3rem;}
.item-list{margin:0 0.24rem 0.24rem;}
.item-list .item{float: left;width: 21.3%;height: 0.6rem;padding: 3px 0;margin-right: 3%;margin-top: 0.2rem;line-height: 0.6rem;text-align: center;
border: 1px solid #ccc;border-radius: 5px;font-size: 0.25rem;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
.item-list  .chosen{background: #fcf0f0;color: #f03d37;border: 1px solid #f03d37;}


.cinema-item{padding: 0.26rem  0.3rem 0.26rem 0; margin-left: 0.3rem;background-color: #fff;}
.item-title{line-height: 0.46rem;font-size: 0.28rem;color: #000;}
.item-title h3{font-weight: 400;display: inline-block;}
.item-price{color:#f03d37;font-size: 0.22rem;margin-left: 0.15rem;}
.item-price .price{font-size: 0.36rem;}
.item-location{margin-top: 0.12rem;font-size: 0.26rem;color: #666; }
.item-location .item-address{display: inline-block;width: 82%;}
.item-address  p{width: 80%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}

.label-block{line-height: 0.34rem; margin-top: 4px;margin-bottom: 4px;}
.label-block .allowRefund,.endorse,.snack,.vipTag{color: #589daf;border: 1px solid #589daf;display: inline-block;padding: 0 3px;
   line-height: 0.3rem;border-radius: 2px; font-size: 0.2rem;}
.label-block .endorse,.snack,.vipTag{margin-left:0.1rem;}
.label-block  .snack,.vipTag{color: #f90;border: 1px solid #f90;}

</style>
