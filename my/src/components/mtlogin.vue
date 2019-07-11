<template>
    <div>
        <div class="mtlogin">
            <input type="text" placeholder="账号名/手机号/Email"/>
            <input type="text" placeholder="请输入您的密码"/>
        </div>
        <button class="login">登录</button>
    </div>

</template>
<script>
    export default {

    }
</script>

<style scoped>
    .mtlogin{
        height: 1.76rem;
        background: #fff;
        padding-left: 0.3rem;
        border-bottom: 0.02rem solid #eee;
    }
    .mtlogin input{
        width:100%;
        border:0;
        height: 0.8rem;
    }
    .mtlogin input:nth-of-type(1) {
        border-bottom: 0.02rem solid #eee;
    }
    .login{
        border:0;
        width: 96%;
        background: #df2d2d;
        color: #fff;
        height: 1rem;
        margin-left: 0.15rem;
        margin-top: 0.26rem;
        border-radius: 0.1rem;
        font-size: 0.38rem;
    }
</style>