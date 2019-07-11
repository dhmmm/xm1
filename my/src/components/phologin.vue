<template>
    <div>
        <div class="phologin">
            <p>
                <input type="text" placeholder="请输入手机号">
                <button>获取验证码</button>
            </p>
            <p>
                <input type="text" placeholder="请输入短信验证码"/>
            </p>
        </div>
        <button class="login">登录</button>
    </div>
</template>
<style scoped>
    .phologin{
        height: 1.76rem;
        background: #fff;
        padding-left: 0.25rem;
        border-bottom: 0.02rem solid #ccc;
    }
    .phologin input{
        border:0;
    }
    .phologin p:nth-of-type(1){
        border-bottom: 0.02rem solid #ccc;
    }
    .phologin p:nth-of-type(1) input{
        height:0.8rem;
        width: 70%;
    }
    .phologin p:nth-of-type(1) button{
        background: #eee;
        border:0;
        width: 1.8rem;
        height: 0.58rem;
        border-radius: 0.1rem;
        color: #333;
    }
    .phologin p:nth-of-type(2) input{
        width:95%;
        background: #eee;
        height: 0.6rem;
        margin: 0.15rem 0;
        border-radius: 0.1rem;
    }
    .login{
        border:0;
        width: 96%;
        background: #dcdcdc;
        color: #999;
        height: 1rem;
        margin-left: 0.15rem;
        margin-top: 0.26rem;
        border-radius: 0.1rem;
        font-size: 0.38rem;
    }
</style>