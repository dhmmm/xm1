<template>
    <div>
        <div class="most-expected">
            <p class="title"> 近期最受期待</p>
            <div class="most-expected-list">
                <div class="most-expected-item"  v-for="(item,index) in  lunboList"  @click="goDetial(item.id)">
                    <div class="expected-imgcon" >
                        <img :src="lunboImg[index]" />
                        <p class="wish">  <span >{{item.wish}}人想看 </span>  </p>
                         <div class="toggle-wish">
                         <span></span>
                        </div>
                     </div>
                    
                     <h3 class="name line-ellipsis">{{item.nm}}</h3>
                     <p class="date">{{item.comingTitle.slice(0,5)}}</p>
                </div>    
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data(){
        return{
            lunboList:[],
            lunboImg:[
            "https://pic.maizuo.com/usr/movie/8e19fefcc60ede53262e77a3347b27cc.jpg",
            "https://pic.maizuo.com/usr/movie/a47f75689b80e5ee9b29318dc7af680f.jpg",
            "https://pic.maizuo.com/usr/movie/1ad17d2546a9012e0e74ed9d35037583.jpg",
            "https://pic.maizuo.com/usr/movie/5abac14d599a4b78ea6161857026d293.jpg",
            "https://pic.maizuo.com/usr/movie/7cfc6dce2e2f130db2fc28153b370dc9.jpg",
            "https://pic.maizuo.com/usr/movie/91f5bcd51621c9d7f2da217b1c208c7b.jpg",
            "https://pic.maizuo.com/usr/movie/546f794eb756acf0e90008308a913209.jpg",
            "https://pic.maizuo.com/usr/movie/05c44d114447c7d280fb2d60de30a614.jpg",
            "https://pic.maizuo.com/usr/movie/6f5c8ea4681beaa4edd8e2c6d2d2cedc.jpg",
            "https://pic.maizuo.com/usr/movie/85f4fc27c6b90d7e84295e115837728b.jpg",
            ],
        }
    },
    created() {
        this.$axios.get("/my/ajax/mostExpected?ci=55&limit=10&offset=0&token="
            ).then((res)=>{
                console.log(res.data.coming);
                this.lunboList=res.data.coming;

            });
    },
    
  

}
</script>
<style>
.most-expected-list{overflow: scroll;white-space: nowrap;}
.most-expected-item{width: 1.7rem;display: inline-block; margin-right: 10px;}
.most-expected{padding: 0.24rem 0.3rem 0.24rem 0.3rem;background-color: #fff;margin-bottom: 0.2rem;}
.most-expected .title{margin: 0 0 0.24rem;font-size: 0.28rem;color: #333;}
.expected-imgcon{margin-bottom: 0.12rem;width:1.70rem;height:2.3rem;position: relative;}
.expected-imgcon img{width: 100%;}
.expected-imgcon .wish{color:#faaf00;font-size: 0.22rem;font-weight: 600; position: absolute;bottom: 2px;left:4px;}
.line-ellipsis{white-space: nowrap;overflow: hidden;text-overflow: ellipsis;}
.most-expected-item .name{margin:0 0 3px;font-size: 0.26rem;color:#222;}
.most-expected-item .date{font-size: 0.24rem;color:#999;}
.most-expected-item .toggle-wish{width: 0.56rem;line-height: 0.56rem;background:rgba(61,63,71,0.6);text-align: center;
    border-bottom-right-radius: 10px;position: absolute;top: 0;left:0; }
.most-expected-item .toggle-wish span{display: inline-block;width: 0.2rem;height:0.2rem;
background: url("../assets/img/like.png") no-repeat;background-size: 100%;}
</style>
