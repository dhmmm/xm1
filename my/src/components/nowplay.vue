<template>
  <div class="now">
      <ul>
        <li v-for="film in movieList" @click="gobuy">
          <img src="../../public/now.jpg"/>
          <div class="filmxx">
            <h3 class="filmnz">{{film.nm}}<span>{{film.version.slice(1)}}</span></h3>
            <p v-if="film.sc!==0">观众评分：<span v-bind:class="['col']">{{film.sc}}</span></p>
            <p v-else="film.sc===0"><span v-bind:class="['col']">{{film.wish}}</span>人想看</p>
            <p class="start">主演：{{film.star}}</p>
            <p>{{film.showInfo}}</p>
          </div>
          <div>
            <p class="btn" v-if="film.showInfo.slice(0,2)==='今天'">购票</p>
            <p class="btn1" v-else>预售</p>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            movieList:[],
            flag:false,
        }
    },
    methods:{
        gobuy(){
            this.$router.push("/buy")
        },
    },
    created(){
        this.$axios.get("/my/ajax/movieOnInfoList?token=").then((res)=>{
           this.movieList=res.data.movieList
          })
//        this.$axios.get("/my/ajax/moreComingList?token=&movieIds=1205779%2C1203673%2C1235560%2C1204589%2C1219932%2C1240752%2C346172%2C246061%2C346559%2C1211270").then((res)=>{
//            var arr=res.data.coming;
//            this.movieList=this.movieList.concat(arr);
//        })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .now{
    position: fixed;
    top: 1.9rem;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
  }
  .now ul li img{
    width:1.28rem;
    height: 1.8rem;
    margin-right: 0.25rem;
  }
  .now ul{
    padding:0 0.5rem 0 0.3rem;
  }
  .now ul li{
    display: flex;
    justify-content: space-between;
    padding: 0.3rem 0 0.3rem;
    border-bottom: 0.01rem solid #eee;
  }
  .now .filmxx{
    width:4.3rem;
    font-size: 0.27rem;
  }
  .now .filmxx p{
    margin-top: 0.08rem;
  }
  .now .filmxx .filmnz{
    color: black;
    width: 4.1rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .now .filmxx .filmnz span{
    display: inline-block;
    padding:0 0.05rem;
    background: dodgerblue;
    color: white;
    font-weight: 300;
    font-size: 0.24rem;
    margin-left: 0.1rem;
    border-radius: 0.05rem;
  }
  .now .btn{
    width: 0.94rem;
    height: 0.54rem;
    background: #e54847;
    color: white;
    text-align: center;
    line-height: 0.54rem;
    border-radius: 0.1rem;
    margin-top: 0.65rem;
  }
  .now .btn1{
    width: 0.94rem;
    height: 0.54rem;
    background: dodgerblue;
    color: #fff;
    text-align: center;
    line-height: 0.54rem;
    border-radius: 0.1rem;
    margin-top: 0.65rem;
  }
  .start{
    width: 4.2rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .col{
    color:#faaf00;
    font-weight: 700;
    font-size:0.29rem ;
  }
</style>
