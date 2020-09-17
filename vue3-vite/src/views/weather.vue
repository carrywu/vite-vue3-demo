<template>
  <div>
    <div>查询天气</div>
    <input v-model="cityname" type="text" placeholder="输入城市" />
    <button @click="fetchData">搜索</button>
    <ul v-if="weatherObj">
        <li>
            城市名:{{weatherObj.city}}
        </li>
        <li>
            日期:{{weatherObj.date_y}}
        </li>
        <li>
            温度:{{weatherObj.temperature}}
        </li>
    </ul>
    <ul v-else-if="errText">
        {{errText}}
    </ul>
  </div>
</template>

 <script>
import axios from "axios";
import { reactive, ref, computed, watch, onMounted } from "vue";
export default {
  setep() {
    const cityname =reactive(null)
    const weatherObj = reactive({})
    const errText=reactive(null)
   onMounted(()=>{
     console.log('router.name',this)
   })
    return{
        cityname,
        weatherObj,
        errText
    }
  },
  methods: {
    fetchData(cityname) {
      axios
        .get("/api", {
          params: {
            cityname: this.cityname,
            key: "ec276c931fe8d07d9c6132845ee458dc"
          }
        })
        .then(res => {
            if(res.data.resultcode!=112){
            this.weatherObj = res.data.result.today
           console.log(this.weatherObj,res.data.result.today);
            }else{
               this.errText= res.data.reason
               console.log('this.errText',res.data.reason)
            }
        });
    }
  }
};
</script>

<style>
</style>