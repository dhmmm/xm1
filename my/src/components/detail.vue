<template>
    <div>
        <div class="detial">
            <div class="navbar">
                <p class="navbar-back"   @click="goBack"> <span class="   iconfont icon-changyongicon-"></span></p> 
                <div class="detial-title">{{movie.nm}}</div>
            </div>
            <!-- short des -->
            <div class="det-movie clear">
                <div class="det-imgcon">   
                     <img src="../assets/img/01.png"/>
                </div>
                <div class="det-des">
                    <div class="det-des-name">
                        <p>{{movie.nm}}</p>
                    </div>
                    <div class="det-des-ename"> {{movie.enm}}</div>
                    <div class="det-des-wish">
                        <p><span>{{movie.wish}}</span> 人想看</p>
                    </div>
                    <div class="det-des-cat">
                        <p>{{movie.cat}}</p>
                    </div>
                    <div class="det-des-nation">
                        <p><span>{{movie.src}}</span>/<span>{{movie.dur}} 分钟</span> </p>
                    </div>
                    <div class="det-des-show">
                        <p>{{movie.pubDesc}}</p>
                    </div>
                </div>
            </div>

            <!-- text content -->
            <div class="detial-content">
                <div class="detial-cont"  ref="content">
                    <p class="det-btn"> <span> 特惠购票</span> </p>
                    <div class="det-content" ref="txt">
                        <p>{{movie.dra}}</p>    
                    </div>
                
                </div>
           
                <div class="text-button" @click="changeH">
                        <span class="iconfont icon-jiantouarrow486"></span>
                </div>
            </div>
            <!-- start -->
            <div class="starts"> 
                <ul class="movie-start ">
                    <li v-for="itm in  dirList">
                        <img src="../assets/img/star1.png">
                        <p class="movie-dir">{{itm}}</p>
                    </li>
                    <li  v-for="item in starList">
                        <img src="../assets/img/star5.png">
                        <p class="movie-dir">{{item}}</p>
                    </li>
                </ul>
                <div class="movie-more">
                    <h3>全体演职人员</h3>
                </div>
            </div>
            <!-- media -->
            <div class="section-media">
                <h3>媒体库</h3>
                <ul class="media-list">
                    <li>
                        <img src="../assets/img/show1.png">
                    </li> 
                    <li>
                        <img src="../assets/img/show2.png">
                    </li>
                     <li>
                        <img src="../assets/img/show3.png">
                    </li>
                     <li>
                        <img src="../assets/img/show4.png">
                    </li>
                     <li>
                        <img src="../assets/img/show5.png">
                    </li>
                </ul>
                <div class="media-link">
                    <h3><span>视频</span> </h3>
                    <h3><span>剧照</span></h3>
                </div>
            </div>
        </div>
       
    </div>
</template>
<script>

export default {
    data() {
        return {
            movie:{},
            flag:true,
            starList:[],
            dirList:[]
        }
    },
    components:{
   
    },
    methods: {
        goBack(){
            this.$router.go(-1)
        },
        changeH(){
            this.flag=!this.flag
            if(this.flag){
            this.$refs.content.style.height="2rem";
            this.$refs.content.style.overflow="hidden";
            }else{
            this.$refs.content.style.height="5.6rem";
             this.$refs.txt.style.overflow="visible";
            }
        }

    },
    created() {
        var id=this.$route.params.id
         this.$axios.get("/my/ajax/detailmovie?movieId="+id
            ).then((res)=>{
                //console.log(res.data.detailMovie);
                this. movie=res.data.detailMovie;
                this.starList=res.data.detailMovie.star.split(",");
                this.dirList=res.data.detailMovie.dir.split(",")

            });
       
        
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

.detial-content{border-bottom:0.2rem solid #F4F4F4;}
.detial-cont{padding: .3rem .3rem 0;}
.det-btn{padding: .2rem;font-size: 16px;text-align: center; line-height: 1;background:#e54847;color: #fff; border-radius: 4px;margin: 0 0 .2rem; }
.det-content{font-size: .3rem;color: #555;height: 1.16rem;overflow: hidden;}
.det-content .icon{font-size: 1em;line-height: 1em;vertical-align: middle;color: #aaa;}
.text-button{font-size: .3rem;color: #aaa;text-align: center;height: .44rem;background: #fff;}

.starts{border-bottom:0.2rem solid #F4F4F4;}
.movie-start{padding: .3rem 0 .1rem .3rem; white-space: nowrap; overflow: auto;}
.movie-start li{padding: 0 .03rem;text-align: center;display: inline-block;}
.movie-start img{width: 1.3rem;height: 1.8rem;margin: .04rem;}
.movie-start  .movie-dir{font-size: 0.22rem;color: #000;overflow: hidden;}
.movie-more{border-top: 1px solid #e5e5e5;padding: 0 .3rem;line-height: .8rem;border-bottom: 1px solid #e5e5e5;}
.movie-more h3{font-weight: lighter;color: #666;}

.section-media{border-bottom:0.2rem solid #F4F4F4; }
.section-media h3{padding: .2rem .3rem;color: #666;font-size: .3rem;line-height: 0.44rem;}
.media-list{padding-left: .3rem;white-space: nowrap;    overflow-x: scroll;}
.media-list li{display: inline-block;margin-right: 0.1rem;}
.media-list img{width: 1.8rem;height: 1.4rem;}

.media-link{line-height: 0.8rem;color: #666;font-size:0.3rem;padding-left: .3rem; }
.media-link h3{font-weight: 400;display: inline-block;width: 41%;}
</style>

