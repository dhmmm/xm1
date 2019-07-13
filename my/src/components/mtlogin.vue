<template>
    <div>
        <div v-if="flag">
            <div class="mtlogin" >
                <input type="text" placeholder="账号名/手机号/Email" v-model="value"/>
                <input type="text" placeholder="请输入您的密码" v-model="pass"/>
            </div>
            <button class="login" @click="login">登录</button>
        </div>

        <div v-else class="register">
            <p>{{value}}已登录</p>
            <button class="back" @click="quit">退出</button>
        </div>

    </div>

</template>
<script>
    import { Toast } from 'mint-ui';
    export default {
        data(){
            return {
                value:'',
                pass:'',
                flag:true
            }
        },
        methods:{
            login(){
                if(/[0-9]/.test(this.value)){
                    if(!/^[1][3|5|7|8][0-9]{9}$/.test(this.value)){
                        Toast({
                            message: '请输入正确格式的手机号',
                            position: 'middle',
                            duration: 3000
                        });
                        return;
                    }
                }
                if(this.pass.length<6 || this.pass.length>16){
                    Toast({
                        message: '输入密码应为6-16位',
                        position: 'middle',
                        duration: 3000
                    });
                    return;
                }
                this.$axios.get("/dlzc/denglu",{
                    params:{
                        name:this.value,
                        pass:this.pass
                    }
                }).then((res)=>{
                    var a=res.data.status;
                    switch (a) {
                        case 0 :
                            Toast({
                                message: '未注册',
                                position: 'middle',
                                duration: 3000
                            });
                            break;
                        case 1:
                            Toast({
                                message: '手机号或密码输入不正确',
                                position: 'middle',
                                duration: 3000
                            });
                            break;
                        case 2:
                            Toast({
                                message: '登录成功',
                                position: 'middle',
                                duration: 3000
                            });
                            this.flag=false;
                            break;
                    }
                })
            },
            quit(){
                this.flag=true;
                this.value="";
                this.pass="";
            }
        },
        watch:{
            value:function(val){//手机号验证
                if(/[^0-9]/.test(val)){
                    this.value=val.replace(/[^0-9]/g,"");
                }
            },
        },
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
    .login,.back{
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
    .register p{
        height: 1.3rem;
        text-align: center;
        font-size: 0.37rem;
        padding-top: 0.6rem;
    }
</style>