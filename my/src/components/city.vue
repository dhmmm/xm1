<template>
   <div>
        <div class="topcity">
           <div class="city-title">定位城市 </div>
            <div class="city-list">
                <div class="city-position   city-item">定位失败 ，请重新定位 </div>
            </div>    
       </div>

       <!-- <div class="topcity">
           <div class="city-title">最近访问城市 </div>
            <div class="city-list">
                <div class="city-item" v-for="item in newCityList"  @click="changeCity(item)">{{item}} </div>
            </div>    
       </div> -->

       <div class="topcity">
           <div class="city-title">热门城市 </div>
            <div class="city-list">
                <div class="city-item" v-for="item in topCity"  @click="changeTopCity(item)">{{item}} </div>
            </div>    
       </div>

        <div>
            <ul class="city">
                <li v-for="(city,index)  in citylist">
                    <h3  v-if="index===0||index!==0 && citylist[index-1].letter!== city.letter" :ref="city.letter" > {{city.letter}}</h3>
                    <p @click="changeCity(city.name,city.cityId)">{{city.name}} </p>
                </li>
            </ul>
            <ol class=" cityStr">
                <li v-for="item in cityStr" @click="go(item)" >{{item}}</li>
            </ol>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            citylist:[],
            cityStr:"",
            topCity:["上海","北京" ,"广州", "深圳", " 武汉" ,"天津", "西安", "南京"," 杭州"," 成都" ,"重庆"],
            //nearCity:[]
            nearCity:["上海", "南京",  "重庆"],
            //newCityList:[],
        }
    },
    created() {
        this.getLetters();
        this.$axios.get("/mz/gateway",{
            params:{
                k:Date.now()
            },
            headers:{
                "X-Client-Info": `{"a":"3000","ch":"1002","v":"5.0.4","e":"15624937211163936137873"}`,
                "X-Host":"mall.film-ticket.city.list"
            }
        }).then((res)=>{
            // console.log(res);
            var arr=res.data.data.cities.sort((a,b)=>{
                //按拼音排序
                return a.pinyin.localeCompare(b.pinyin)
            }).map((item)=>{
                return{
                    'letter':item.pinyin[0].toUpperCase(),
                    'name':item.name,
                    'cityId':item.cityId
                }
               
            })
            this.citylist=arr
            //console.log(arr);
        })
    },
    methods: {
        getLetters(){
            var str="";
            for(var i=65;i<91;i++){
                if(String.fromCharCode(i)==="U"||String.fromCharCode(i)==="O"||
                String.fromCharCode(i)==="I"||String.fromCharCode(i)==="V") continue;

                str+=String.fromCharCode(i)
            };
            this.cityStr=str;
        },
        go(letter){
            var top=this.$refs[letter][0].offsetTop;
            document.documentElement.scrollTop=top; //滚动的高度等于 offsetTop实现显示跳转
            //console.log(top)
        },
        changeCity(name,id){
            sessionStorage.setItem("city",name);
             sessionStorage.setItem("cityId",id);
                this.$router.go(-1);

                var name=sessionStorage.getItem("data.city")
                if( name){
                    this.nearCity.unshift(name);
                } 
        },
        changeTopCity(name){
            sessionStorage.setItem("city",name); 
            this.citylist.forEach((item)=>{
                if(item.name===name){
                    sessionStorage.setItem("cityId",item.cityId); 
                }
            })
            this.$router.go(-1);
        }
        
    },
}
</script>

<style >

.city{color:#333;}
.city h3{line-height: 0.6rem;background: #EBEBEB;padding-left:0.3rem; }
.city p{line-height: 0.9rem;font-size: 0.28rem;padding-left:0.3rem;border-bottom: 1px solid #C8C7CC;background: #F5F5F5;}
.cityStr{position: fixed;right: 0; top:26%;}

.topcity{color: #333;font-size:0.28rem;}
.city-title{padding-left: 15px;line-height: 30px;background: #EBEBEB; }
.city-list{padding-bottom: 8px;background:#f5f5f5;padding-right: 30px; }
.city-item{display: inline-block;width: 29%;line-height:0.66rem;margin-top: 15px;margin-left: 4%;padding: 0 4px;
    border: 1px solid #e6e6e6;border-radius: 3px;text-align: center;box-sizing: border-box;background:#fff; }
.city-position{width: auto;min-width: 30%;padding: 0 20px;}
</style>

