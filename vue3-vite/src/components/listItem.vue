<template>
  <div>
    <li>子组件:inject{{sonVal}} --{{item}}</li>
    <input type="text" v-model="sonVal"/>
  </div>
</template>

<script>
import { inject } from "vue";
export default {
  name: "listItem",
  props: ["item"],
  setup() {
    const sonVal = inject("sonVal");
    return {
      sonVal
    };
  }
};
</script>

<style>
</style>