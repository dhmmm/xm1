import Vue from "vue"
Vue.directive("gd",(el,binding)=>{
    el.addEventListener("scroll",()=>{
        var st=el.scrollTop;
        if(st>200){
            binding.value.flag=true;
        }else{
            binding.value.flag=false;
        }
    })
})