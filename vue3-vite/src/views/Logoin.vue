<template>
  <div>
    <div>
      用户名:
      <input class="input is-primary" type="text" v-model="state.name" />
    </div>
    <div>
      密码:
      <input type="password" v-model="password" />
    </div>
    <div>
      <button @click="changeVal">更改</button>
    </div>
    <div>修改前:{{state.password}}</div>
    修改后:{{password}}
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model:show="show">内容</van-popup>
    <div>{{show}}</div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const stroe = useStore();
    const state = stroe.state;
    const password = reactive("");
    let show = reactive(0);
    function showPopup() {
      show = true;
      console.log(show)
    }
    const changeVal = function() {
      stroe.dispatch("changePassword", this.password);
      console.log("state.password", state.password);
    };

    onMounted(() => {
      console.log("store", state);
    });
    computed(() => state).value;
    return {
      state,
      password,
      changeVal,
      show,
      showPopup
    };
  },
  methods: {}
};
</script>

<style>
</style>