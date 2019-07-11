<template>
    <div>
        电影1111111
        <router-link to="/home/movie/now" > 正在上映</router-link>
        <router-link to="/home/movie/coming" > 即将上映</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    created() {
       this.$router.push("/home/movie/now") 
    },
}
</script>

