<template>
  <h1>{{ msg }}</h1>
  <button @click="inCrement"> count is: </button>
  <div class="left"></div>
  <p>{{ count }}</p>
</template>

<script>
import { defineComponent, computed ,onMounted} from 'vue'
import { useStore } from 'vuex'
import { key } from '../store'

import { getTest} from "../api/index";
export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      default: ''
    }
  },
  setup() {
    const store = useStore(key)
    const count = computed(() => store.state.count)
    return {
      count,
      inCrement: () => store.commit('increment')
    }
  }
})
</script>
<style>
  h1{
    width: 100px;
  }
  .left{
    width: 1920px;
    height: 200px;
    background: #16418a;
  }
</style>
