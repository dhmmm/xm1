<template>
    <div class="day">
        <!--明天的影院-->
        <ul>
            <li v-for="cinema in data">
                <p>{{cinema.nm}}<span>{{cinema.sellPrice}}元起</span></p>
                <p><span>{{cinema.addr}}</span><span>{{cinema.distance}}</span></p>
                <p><span>改签</span><span>小吃</span></p>
                <p>近期场次：16:37 | 18:56 | 20:45</p>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                data:[]
            }
        },
        created(){
            this.$axios.get("/my/ajax/cinemaList?day=2019-07-12&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1562917000085&cityId=197").then((res)=>{
                res.data.cinemas.sort(function () {
                    return Math.random()-0.5;
                });
                this.data=res.data.cinemas;
            })
        }

    }
</script>
<style scoped>
    .day ul{
        padding: 0 0.3rem;
    }
    .day ul li{
        height: 2rem;
        border-bottom: 0.01rem solid #ccc;
    }
    .day ul li p{
        margin-top: 0.1rem;
    }
    .day ul li p:nth-of-type(1){
        font-size: 0.28rem;
        color: black;
    }
    .day ul li p:nth-of-type(1) span{
        color: red;
        margin-left: 0.2rem;
    }
    .day ul li p:nth-of-type(2) {
        font-size: 0.26rem;
    }
    .day ul li p:nth-of-type(2) span:nth-of-type(1){
        display: inline-block;
        width: 80%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .day ul li p:nth-of-type(2) span:nth-of-type(2) {
        display: inline-block;
        float: right;
    }
    .day ul li p:nth-of-type(3) span:nth-of-type(1){
        border: 0.01rem solid #0086b3;
        color: #0086b3;
    }
    .day ul li p:nth-of-type(3) span:nth-of-type(2){
        border: 0.01rem solid #faaf00;
        color: #faaf00;
        margin-left: 0.2rem;
    }
</style>