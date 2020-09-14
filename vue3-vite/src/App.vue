<template>
<div>
  <div>
    <div>
      <router-link to='/'>home</router-link>
    </div>
  <div>
    <router-link to='/weather'>weather</router-link>
  </div>

  </div>
  <router-view></router-view>
</div>
</template>

<script>
import { reactive, ref ,computed,watch} from 'vue'
export default {
  name: 'Home',
}
</script>
