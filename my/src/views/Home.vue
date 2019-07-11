<template>
  <div class="home">

    <router-view></router-view>

    <ul class="footer">
      <li><router-link to="/home/movie"> 电影</router-link></li>
      <li><router-link to="/home/cinema"> 影院</router-link></li>
        <li><router-link to="/user"> 我的</router-link></li>

    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',

}
</script>
<style>
@import '../assets/css/reset.css';
.footer{background:#fff; position: fixed;bottom: 0;width: 100%;border-top: 1px solid #ccc;}
.footer li{float: left;width: 33.3%;line-height:0.96rem ;}
</style>

