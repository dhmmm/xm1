<template>
    <div>
        <div class="header">
            <span class="iconfont icon-jiantou-zuo" @click="gomovie"></span>
            <span>猫眼电影</span>
        </div>
        <div class="con">
            <p>
                <input type="text" placeholder="搜电影、搜影院"/>
                <span>取消</span>
            </p>

        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            gomovie(){
                this.$router.push("/home/movie/nowplay");
            }
        }
    }
</script>
<style scoped>
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
    .con{
        background: #f5f5f5;
        height:13rem;
    }
    .con p{
        line-height: 1rem;
        border-bottom: 0.01rem solid #ccc;
    }
    .con p input{
        border:0.01rem solid #ccc;
        border-radius: 0.1rem;
        width: 80%;
        height: 0.6rem;
        margin-left: 0.2rem;
        padding-left: 0.2rem;
    }
    .con p span{
        color: red;
        font-size: 0.28rem;
        margin-left: 0.2rem;
    }
</style>