<template>
  <div class="home">
    hello
    <router-view></router-view>

    <ul class="footer">
      <li><router-link to="/home/movie"> 电影</router-link></li>
      <li>    <router-link to="/home/cinema"> 影院</router-link></li>
      <li>    <router-link to="/home/user"> 我的</router-link></li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style>
@import '../assets/css/reset.css';
.footer{position: fixed;bottom: 0;width: 100%;border-top: 1px solid #ccc;}
.footer li{float: left;width: 33.3%;line-height:0.96rem ;}
</style>

