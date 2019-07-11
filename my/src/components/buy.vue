<template>
    <div>
        <p @click="godetail">
            购票详情
        </p>
    </div>
</template>

<script>
    export default {
        methods:{
            godetail(){
                this.$router.push("/detail");
            }
        }
    }
</script>