<template>
    <div class="my">
        <div class="header">
            <span class="iconfont icon-jiantou-zuo" @click="gomovie"></span>
            <span>猫眼电影</span>
        </div>
        <div>
            <div class="nav">
                <router-link to="/user/mtlogin"><p>美团账号登录</p></router-link>
                <router-link to="/user/phologin"><p>手机验证登录</p></router-link>
            </div>
        </div>

        <router-view></router-view>
        <div class="zc">
            <span @click="gosin">立即注册</span>
            <span>找回密码</span>
        </div>
        <p class="tel">&copy;猫眼电影 客户服务 ：<span>400-670-5335</span></p>

    </div>
</template>
<script>
    export default {
        methods:{
            gomovie(){
                this.$router.push("/home/movie/nowplay");
            },
            gosin(){
                this.$router.push("/signup");
            }
        }
    }
</script>

<style scoped>
    .my{
        background: #f8f8f8;
        height:15rem;
    }
    .header{
        background:#df2d2d ;
        color: #fff;
        line-height: 1rem;
        font-size: 0.36rem;
    }
    .header span{
        display: inline-block;
        margin-left: 0.3rem;
        margin-right: 1.9rem;
    }
    .nav{
        display: flex;
        justify-content: space-between;
        padding: 0 0.3rem;
        background: #fff;
    }
    .nav a{
        display: inline-block;
        text-align: center;
        width: 50%;
        line-height: 0.9rem;
        color: #333333;
        font-size: 0.28rem;
        border-bottom: 0.08rem solid #ccc;
    }
    .nav .router-link-exact-active{
        color: #df2d2d;
        border-bottom:0.08rem solid #df2d2d;
    }
    .zc{
        display:flex;
        justify-content: space-between;
        color: #df2d2d;
        padding: 0 0.2rem;
        font-size: 0.26rem;
    }
    .zc span{
        line-height: 1rem;
    }
    .tel{
        text-align: center;
        color: black;
        font-size: 0.26rem;
    }
    .tel span{
        color:#df2d2d ;
    }

</style>
