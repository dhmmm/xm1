<template>
    <div class="buy" v-gd="vis">
        <!--正在热映点进的第一页-->
        <div class="head">
            <span @click="back"> < </span>
            <span>{{movielist.nm}}</span>
        </div>
        <div class="filmlist">
            <img src="../../public/now.jpg"/>
            <div>
                <h3>{{movielist.nm}}</h3>
                <p>{{movielist.enm}}</p>
                <p>
                    <span v-if="movielist.sc!==0">
                        <span :class="['col']">{{Number(movielist.sc).toFixed(1)}}</span>
                    &nbsp;<span>({{movielist.snum}}万人评论)</span>
                    </span>
                    <span v-else>暂无评分</span>
                </p>
                <p>{{movielist.cat}}<span class="version" v-show="movielist.version!==''">{{movielist.version}}</span></p>
                <p>{{movielist.src}} / {{movielist.dur}}分钟</p>
                <p>{{movielist.pubDesc}}</p>
            </div>
            <div>
                <!-- <span @click="godetail(movielist.id)"> > </span> -->
                    <span @click="godetail()"> > </span>
            </div>
        </div>

        <!--选日期导航-->
        <!--吸顶-->
        <div class="daynav-top" v-show="vis.flag">
            <router-link to="/buy/day">今天</router-link>
            <router-link to="/buy/tomorrow">明天</router-link>
            <router-link to="/buy/afterday">后天</router-link>
        </div>
        <div class="daynav">
            <router-link to="/buy/day">今天</router-link>
            <router-link to="/buy/tomorrow">明天</router-link>
            <router-link to="/buy/afterday">后天</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Day from './Day.vue';
    import Tomorrow from './Tomorrow.vue';
    import Afterday from './Afterday.vue';
    export default {
        components:{
            Day,Tomorrow,Afterday
        },
        data(){
            return {
               // id:'',
                movielist:{},
                vis:{flag:false},
                index:0
            }
        },
        methods:{
            godetail(id){
                var id=sessionStorage.getItem("movieId");
                this.$router.push("/detail/"+id);
            },
            back(){
                this.$router.push("/");
            },
            change(ind){
                this.index=ind;
            }
        },
        created(){
//            this.$router.push("/buy/day")
            //this.id=this.$route.query.movieId;
           
           
           var id=sessionStorage.getItem("movieId")
            this.$axios.get("/my/ajax/detailmovie?movieId="+id).then((res)=>{
                console.log(res)
                
                this.movielist=res.data.detailMovie;

            })

        }

    }
</script>

<style scoped>
    .buy{
        position: fixed;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow:auto;
    }
    .buy .head{
        background:#e54847;
        color: #fff;
        font-size: 0.36rem;
        line-height: 1rem;
    }

    .buy .head span:nth-of-type(1){
        position: relative;
        left: 0.2rem;
        font-size: 0.6rem;
    }
    .buy .head span:nth-of-type(2){
        position: relative;
        left: 11%;
        display: inline-block;width: 68%;text-align: center;
    }
    .buy .filmlist{
        width: 100%;
        height:3.1rem;
        padding: 0.3rem;
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: space-between;
    }
    .buy .filmlist img{
        width:1.9rem;
        height: 3rem;
    }
    .buy .filmlist div:nth-of-type(1){
        width:58%;
        color: #eee;
    }
    .buy .filmlist div:nth-of-type(1) h3{
        color: #fff;
        font-size: 0.38rem;
    }
    .buy .filmlist div:nth-of-type(1) p{
        margin-top: 0.13rem;
    }
    .buy .filmlist div:nth-of-type(2){
        width: 10%;
        color: #eee;
        font-size: 0.37rem;
    }
    .buy .filmlist div:nth-of-type(2) span{
        position: relative;
        top:0.9rem;
    }
    .buy .version{
        display: inline-block;
        background: #666;
        margin-left: 0.2rem;
        padding: 0.05rem;
        border-radius: 0.1rem;
        font-size: 0.2rem;

    }
    .col{
        color:#faaf00;
        font-weight: 700;
        font-size:0.29rem ;
    }

    /*日期导航*/
    .buy .daynav-top{
        width: 100%;
        background: #fff;
        position: fixed;
        top:0;
        display: flex;
        justify-content: space-between;
        border-bottom: 0.01rem solid #ccc;
    }
    .buy .daynav-top a{
        display: inline-block;
        width: 100%;
        line-height: 0.9rem;
        text-align: center;
        color: #333;
        font-size: 0.28rem;
    }
    .buy .daynav{
        display: flex;
        justify-content: space-between;
        border-bottom: 0.01rem solid #ccc;
    }
    .buy .daynav a{
        display: inline-block;
        width: 100%;
        line-height: 0.9rem;
        text-align: center;
        color: #333;
        font-size: 0.28rem;
    }
    .buy .daynav  .router-link-exact-active{
        /*display: block;*/
        color: #e54847;
        border-bottom: 0.01rem solid #e54847;
    }

</style>