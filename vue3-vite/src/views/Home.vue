<template>
<div>
<div class="inputbox">  
  <input v-model="state.inputVal" class="input-box" type="text" placeholder="输入"><button @click="submitInput">提交</button>
  <ul class="list">
    <li v-for="(item,index) in state.list" :key="index" @click="delectItem(index)">
      {{item}}
    </li>
  </ul>
</div>

<div>refValue:{{refVal}}</div>
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
import { reactive, ref ,computed,watch} from 'vue'
import { mapState } from "vuex"
export default {
  name: 'Home',
  setup(){
   const state = reactive({
      count: 0,
      double: computed(() => state.count * 2),
      inputVal:"",
      list:[]
    })
    let refVal=ref(0)
    setTimeout(()=>{
      refVal.value++
    },1000)
    watch(()=>state.count,
    (count, prevCount) => {
        console.log('更改前:'+count,'更改后:'+prevCount)
    }
    )
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
