<template>
    <div class="zc">

        <div class="header">
            <span class="iconfont icon-jiantou-zuo" @click="godl"></span>
            <span>猫眼电影</span>
        </div>

        <div class="zc-content">
            <p class="hint" v-show="tishi">手机号输入不正确，请重新输入</p>
            <p class="top">
                <span :class="{'col':yzm===0||yzm===1}">输入手机号</span> >
                <span :class="{'col':yzm===2}">输入验证码</span> >
                <span :class="{'col':yzm===3}">设置密码</span>
            </p>

            <input type="text" placeholder="请输入验证码" v-if="yzm===2" v-model="code"  class="inseryzm"/>
            <input type="text" placeholder="请输入密码" v-else-if="yzm===3" v-model="pass" class="pas"/>
            <input type="text" placeholder="请输入手机号" v-else v-model="value" id="insert"/>

            <div class="agreement">
                <p><input type="checkbox" v-model="flag"/></p>
                <p>我已阅读并同意<span>《美团网用户协议》</span></p>
            </div>
            <!--可点击-->
            <button class="signup1" v-if="yzm===1" @click="hqyzm">获取验证码</button>
            <!--不可点击-->
            <button class="signup" v-else-if="yzm===0">获取验证码</button>
            <button class="signup2" v-else-if="yzm===2" @click="yanzheng">验证</button>
            <button class="signup3" v-else  @click="zhuce">注册</button>


            <p class="tel">&copy;猫眼电影 客户服务 ：<span>400-670-5335</span></p>

        </div>


    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    export default {
        data(){
            return {
                value:'',//输入的手机号
                pass:'',//输入的密码
                code:'',//输入的验证码
                a:'', //随机生成的验证码
                flag:true,//是否勾选同意协议
                tishi:false,//错误提示是否显示
                yzm:0,//获取验证码不能点击，1可点击，2变为注册--输入框变为输入验证码
            }
        },
        methods:{
            godl(){//返回到登录页
                 this.$router.push("/user/mtlogin")
            },
            hqyzm(){//获取验证码
                this.a='';
                this.a=Math.ceil(Math.random()*10000);
                alert("验证码："+this.a);
                this.yzm=2;
            },
            yanzheng(){//验证
                if(Number(this.code)===this.a){
                    //验证码输入正确
                    this.yzm=3;//变为注册，可输入密码
                }else {
                    Toast({
                        message: '验证码输入错误',
                        position: 'middle',
                        duration: 3000
                    });
                    this.code="";
                }
            },
            zhuce(){//点击注册
                if(this.flag){ //勾选协议进入
                    if(this.pass.length<6 || this.pass.length>16){
                        Toast({
                            message: '输入密码应为6-16位',
                            position: 'middle',
                            duration: 3000
                        });
                        return;
                    }
                    this.$axios.get("/dlzc/zhuce",{
                        params:{
                            name:this.value,
                            pass:this.pass
                        }
                    }).then((res)=>{
                        var a=res.data.status;
                        switch (a) {
                            case 0 :
                                Toast({
                                    message: '该用户已注册，请登录',
                                    position: 'middle',
                                    duration: 3000
                                });
                                break;
                            case 1:
                                Toast({
                                    message: '注册成功',
                                    position: 'middle',
                                    duration: 3000
                                });
                                this.$router.push("/user/mtlogin");
                                break;
                        }
                    })
                }else {
                    Toast({
                        message: '请勾选同意协议',
                        position: 'middle',
                        duration: 3000
                    });
                }
            }
        },
        watch:{
            value:function(val){//手机号验证
                if(/[^0-9]/.test(val)){
                    this.value=val.replace(/[^0-9]/g,"");
                }
                if(/[0-9]/.test(val)){
                    if(/^[1][3|5|7|8][0-9]{9}$/.test(val)){
                        this.tishi=false; //输入正确
                        this.yzm=1;
                    }else {
                        this.tishi=true;//显示错误提示
                        this.yzm=0;
                    }
                }
            },
        },

    }
</script>
<style scoped>
    .zc{
        background: #f8f8f8;
        height:14rem;
        overflow: hidden;
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
    .top{
        text-align: center;
        line-height: 0.8rem;
        font-size: 0.28rem;
        border-bottom: 0.01rem solid #ccc;
        background: #fff;
    }
    .zc-content .hint{
        line-height: 0.8rem;
        background: #FFF6E0;
        color:#D78900;
        text-align: center;
        border-bottom: 1px solid #FFEBC8;
    }
    .zc-content #insert,.inseryzm,.pas{
        width:100%;
        border: 0;
        border-top:  0.01rem solid #ccc;
        border-bottom: 0.01rem solid #ccc;
        line-height: 0.8rem;
        padding-left: 0.3rem;
        margin-top: 0.15rem;
    }
    .agreement{
        display:flex;
        margin-top: 0.3rem;
        line-height: 0.6rem;
    }
    .zc-content .agreement p input{
        width: 0.5rem;
        height: 0.5rem;
    }
    .zc-content .agreement p{
        padding-left: 0.16rem;
        font-size: 0.36rem;
        color: #000;
    }
    .zc-content .agreement p span{
        color: red;
    }
    .signup1,.signup2,.signup3{
        border:0;
        width: 96%;
        background: #df2d2d;
        color: #fff;
        height: 1rem;
        margin-left: 0.15rem;
        margin-top: 0.26rem;
        border-radius: 0.1rem;
        font-size: 0.38rem;
        margin-bottom: 0.3rem;
    }

    .signup{
        border:0;
        width: 96%;
        background: #dcdcdc;
        color: #999;
        height: 1rem;
        margin-left: 0.15rem;
        margin-top: 0.26rem;
        border-radius: 0.1rem;
        font-size: 0.38rem;
        margin-bottom: 0.3rem;
    }
    .tel{
        text-align: center;
        color: black;
        font-size: 0.26rem;
    }
    .tel span{
        color:#df2d2d ;
    }
    .col{
        color: red;
    }
</style>