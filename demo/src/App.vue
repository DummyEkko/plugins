<template>
  <RouterView />
</template>



<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'

onMounted(() => {
  // const iframe = document.querySelector("iframe");
  // if (!iframe) return
  // iframe.onload = function () {
  //   iframe.contentWindow?.postMessage('父页面发送的消息', 'http://127.0.0.1:5500/demo/iframe.html');
  // }
})

// function send() {
//   const iframe = document.querySelector("iframe");
//   if (!iframe) return
//   iframe.contentWindow?.postMessage({
//     to: 'http://localhost:5174/'
//   }, 'http://127.0.0.1:5500/demo/iframe.html');
// }

// window.addEventListener(
//   'message',
//   (e) => {
//     console.log(e);
//   },
//   false
// )

</script>