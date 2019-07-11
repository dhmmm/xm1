<template>
    <div>
        详情页
        {{$route.params.id}}
        <div class="detial">
            <div class="navbar">
                <p class="navbar-back"> <span class="   iconfont icon-changyongicon-"></span></p> 
                <div class="detial-title">狮子王</div>
            </div>
            <!-- short des -->
            <div class="det-movie clear">
                <div class="det-imgcon">   
                     <img src="../assets/img/01.png"/>
                </div>
                <div class="det-des">
                    <div class="det-des-name">
                        <p>狮子王</p>
                    </div>
                    <div class="det-des-ename"> The Lion King</div>
                    <div class="det-des-wish">
                        <p><span>185892</span> 人想看</p>
                    </div>
                    <div class="det-des-cat">
                        <p>剧情,动画,冒险</p>
                    </div>
                    <div class="det-des-nation">
                        <p><span>美国</span>|<span>118分钟</span></p>
                    </div>
                    <div class="det-des-show">
                        <p><span>2019-07-12</span>大陆上映</p>
                    </div>
                </div>
            </div>

            <!-- text content -->
            <div class="detial-content">
                <p class="det-btn"> <span> 特惠购票</span> </p>
                <div class="det-content">
                    <p>
                    小狮子王辛巴（唐纳德·格洛弗 配音）在众多热情的朋友的陪伴下，不但经历了生命中最光荣的时刻，
                    也遭遇了最艰难的挑战，最后终于成为了森林之王，也在周而复始生生不息的自然中体会出生命的真义。
                    非洲大草原上一轮红日冉冉升起，为高大的乞力马扎罗山披上层金色的光纱，所有的动物涌向了同一个地方——荣耀石，兴奋地等待着一个重大消息的宣布：它们的国王木法沙将迎来自己的新生儿。
                    这个新生儿就是小狮子辛巴，它是木法沙的法定接班人、荣耀石未来的国王。
                    </p>
                    <div class="text-button">
                        <span class="iconfont icon-jiantouarrow486"></span>
                    </div>
                </div>
            </div>
            <!-- start -->
            <div class=""> 
            </div>
        </div>
       
    </div>
</template>
<script>

export default {
    components:{
   
    },
    created() {
        console.log(this.$route)
       // console.log(this.$route.params)  
    },

}
</script>
<style>
.navbar{line-height:0.76rem;background:#e54847;padding: 0.12rem; }
.navbar .detial-title{color: #fff;font-size: 0.36rem;text-align: center;display: inline-block;width:70%; }
.navbar-back  {font-size: 0.6rem;color: #fff;display: inline-block;width: 1rem;  }

.det-movie{padding: 0.3rem;color: #fff;background: #584F44;}
.det-imgcon{width: 2.14rem;height: 3rem;}
.det-imgcon img {width: 100%;}
.det-imgcon,.det-des{float: left;}
.det-des{margin-left: 0.25rem;}
.det-des-name{font-size: .34rem;line-height: 1.2;margin: 3px 0 4px;}
.det-des-ename{font-size: .22rem;opacity: .8;height: .22rem;margin-bottom: .12rem;  }
.det-des-wish{ color: #f90; font-size: .34rem;margin: 0.2rem 0;}
.det-des-cat,.det-des-nation,.det-des-show{font-size: .24rem;margin-bottom: .1rem;color: rgba(255,255,255,0.7);}

.detial-content{padding: .3rem .3rem 0;border-bottom:0.2rem solid #F4F4F4}
.det-btn{padding: .2rem;font-size: 16px;text-align: center; line-height: 1;background:#e54847;color: #fff; border-radius: 4px;margin: 0 0 .2rem; }
.det-content{font-size: .3rem;color: #555;}
.det-content .icon{font-size: 1em;line-height: 1em;vertical-align: middle;color: #aaa;}
.det-content .text-button{font-size: .3rem;color: #aaa;text-align: center;height: .44rem;}





</style>

