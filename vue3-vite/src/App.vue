<template>
  <div>
    <div>
      <div>
        <router-link to="/">home</router-link>
      </div>
      <div>
        <router-link to="/weather">weather</router-link>
      </div>
      <div>
        <router-link to="/logoin">logoin</router-link>
      </div>
    </div>

        <router-view></router-view>
   
  </div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted } from 'vue'
export default {
  name: "Home",
  setup() {
   onMounted(() => {
      console.log('mounted!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
  }
};
</script>
