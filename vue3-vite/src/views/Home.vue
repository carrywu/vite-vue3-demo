<!--
 * @Author: your name
 * @Date: 2020-09-17 10:43:49
 * @LastEditTime: 2020-09-17 11:16:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue3/vue3-vite/src/views/Home.vue
-->
<template>
<div>
<div class="inputbox">  
  <input v-model="state.inputVal" class="input-box" type="text" placeholder="输入"><button @click="submitInput()">提交</button>
  <ul class="list">
    <listItem v-for="(item,index) in state.list" :item="item" :key="index" @click="delectItem(index)">
    </listItem>
    <!-- <li v-for="(item,index) in state.list" :key="index" @click="delectItem(index)">
      {{item}}
    </li> -->
  </ul>
</div>

<div>refValue:{{refVal}}</div>
<input type="text" v-model="refVal">
<div>{{state.count}}*2={{state.double}}</div>
  <div class="btn-groups">
    <div @click="increment">+</div>
    <div @click="minus">-</div>
  </div>
  <div class="bg-img">
  </div>

 
</div>
</template>

<script>
import { reactive, ref ,computed,watch,provide} from 'vue'
import { mapState } from "vuex"
import listItem from '../components/listItem.vue'
export default {
  name: 'Home',  
  components:{
    listItem
  } ,
  setup(){
   const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
      inputVal:"",
      list:[]
    })
    let refVal=ref(0)

    watch(()=>state.count,
    (count, prevCount) => {
        console.log('更改前:'+count,'更改后:'+prevCount)
    }
    )
      provide("sonVal",refVal)
    function increment(){
      state.count++
    }
    function minus(){
      if(state.count<=0){
        return
      }
      state.count--
    }
    function submitInput(){
        state.list.push(state.inputVal)
        state.inputVal=''

      
    }
    function delectItem(index){
       state.list.splice(index,1)

    }
    return{
      state,
      increment,
      minus,
      submitInput,
      delectItem,
      refVal
    }
  },
}
</script>
<style lang="scss">
.inputbox{
  border-bottom: 1px solid red;
}


</style>
