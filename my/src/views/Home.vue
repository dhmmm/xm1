<template>
  <div class="home">
    hello
    <router-view></router-view>
    <ul class="footer">
      <li>
        <router-link to="/home/movie">
        <span class="iconfont icon-dianying"></span>
         <span class="move">电影</span>
        </router-link>
      </li>
      <li>
      <router-link to="/home/cinema"> 
      <span class="iconfont icon-yingyuana"></span>
       <span  class="move">影院</span>
      </router-link>
      </li>

      <li>
        <router-link to="/home/user"> 
          <span class="iconfont icon-wode"></span>
          <span  class="move">我的</span>
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {
   
  }
}
</script>
<style>
@import '../assets/css/reset.css';
.footer{position: fixed;bottom: 0;width: 100%;border-top: 1px solid #ccc; text-align: center;background: #fff;}
.footer li{float: left;width: 33.3%;}
.iconfont{position: relative;top:0;font-size: 0.5rem;}
.footer a{
  display: inline-block;width: 100%;color: #797d82;line-height: 1rem;position: relative;
}
.move{width: 100%;display: inline-block;position: absolute;top:0.36rem;left:0;}
.footer .router-link-active{color: #f03d37;}

</style>

