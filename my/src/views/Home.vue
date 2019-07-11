<template>
  <div class="home">
<<<<<<< HEAD
    <Nowplay />
=======
    hello
    <router-view></router-view>

    <ul class="footer">
      <li><router-link to="/home/movie"> 电影</router-link></li>
      <li>    <router-link to="/home/cinema"> 影院</router-link></li>
      <li>    <router-link to="/home/user"> 我的</router-link></li>
    </ul>
>>>>>>> d9ce2b648e6dd65bada7957a3ac56ae0c5378113
  </div>
</template>

<script>
// @ is an alias to /src
import Nowplay from '@/components/nowplay.vue'

export default {
  name: 'home',
  components: {
    Nowplay
  }
}
</script>
<style>
@import '../assets/css/reset.css';
.footer{position: fixed;bottom: 0;width: 100%;border-top: 1px solid #ccc;}
.footer li{float: left;width: 33.3%;line-height:0.96rem ;}
</style>

