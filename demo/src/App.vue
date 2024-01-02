<template>
  <!-- <header>app: {{ x }} {{ y }}</header> -->
  <!-- <button @click="onShare">share</button> -->
  <!-- <video ref="videoRef" width="500" controls></video> -->
  <RouterView />
</template>



<script setup>
import { RouterView } from 'vue-router'
// import { useSharedMouse, useShareScreen } from '@dummy/hooks'
// import { onMounted, ref } from 'vue';

// const videoRef = ref()
// const sourceBuffer = ref()


// const { x, y } = useSharedMouse()



// const { onShare, mime } = useShareScreen({
//   defaultMine: "video/webm;codecs=vp9",
//   time: 1000,
//   onProcess: async(data) => {
//     console.log("实时获取到的数据：", data);
//     if (sourceBuffer.value && !sourceBuffer.value.updating) {
//       sourceBuffer.value.appendBuffer(data);
//       videoRef.value.play()
//     }
//   },
//   onStop: () => {
    
//   }
// })

// onMounted(() => {
//   const mediaSource = new MediaSource();
//   videoRef.value.src = URL.createObjectURL(mediaSource);
//   console.log(videoRef.value);
//   mediaSource.addEventListener("sourceopen", () => {
//     sourceBuffer.value = mediaSource.addSourceBuffer(mime);
//   });
// })

</script>