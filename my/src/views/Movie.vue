<template>
    <div>
        <div class="head">
            <div class="title">猫眼电影</div>
            <div class="title2">
                <p>城市<span class="iconfont icon-jiantouarrow486"></span></p>
                <h3>
                    <router-link to="/home/movie/nowplay">正在热映</router-link>
                </h3>
                <h3>
                    <router-link to="/home/movie/coming" > 即将上映</router-link>
                </h3>
                <h3 @click="go">
                    <span class="iconfont icon-sousuo1" id="search" ></span>
                </h3>
            </div>

        </div>
        <div class="list">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            go() {
                this.$router.push("/search")
            },
        }

    }
</script>

<style scoped>
    .head{
        position: fixed;
        width: 100%;
        top:0;
        background: #fff;
        border-bottom: 0.01rem solid #ccc;
        z-index:6;
    }
    .head .title{
        background: #e54847;
        text-align: center;
        color: white;
        line-height:1rem ;
        width:100%;
        font-size: 0.36rem;
    }
    .head .title2{
        display: flex;
        justify-content: space-between;
        line-height: 0.9rem;
        padding:0 0.2rem;
        font-size: 0.28rem;
    }
    #search{
        color: #e54847;
    }
    .head .title2 a{
        color:#666;
    }
    .head .title2 .router-link-exact-active{
        display: block;
        color: #e54847;
        border-bottom: 0.01rem solid #e54847;
    }
     .list{
         margin-top: 2rem;
     }
</style>



