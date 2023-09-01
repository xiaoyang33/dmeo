<script setup>
import axios from 'axios'
import HelloWorld from './components/HelloWorld.vue'
axios.post('/getData').then(res => {
  console.log(res)
})
console.log('123123123123')
console.log(123123)
console.log(123123)
console.log('oooooo')
console.log(6666)
console.log(9999999)
console.log('pppppoooooo')
console.log('oppppppp')
console.log('kkkkkkk')
console.log('123213123')
console.log('ppppppp')
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
