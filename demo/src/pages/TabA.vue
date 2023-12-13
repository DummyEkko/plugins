<template>
  <div>
    tab-a
  </div>
  <textarea v-model="msg" cols="30" rows="10" @blur="onBlur"></textarea>
  <!-- <iframe id="myIframe" src="http://127.0.0.1:5501/demo/iframe.html" frameborder="0"></iframe> -->
</template>

<script lang='ts' setup>
import { onMounted, ref } from 'vue';
import { useMessage } from '@dummy/hooks'

const msg = ref()
// const channel = ref()

const { sendMsg } = useMessage<{ status: number, msg: string }>({
  name: 'test',
  onMsg: ({ msg }) => {

    console.log(msg);
    

  }
})

const onBlur = () => {
  sendMsg({
    status: 1,
    msg: msg.value
  })
  // channel.value.port1.postMessage(msg.value)
}

onMounted(() => {
  // console.log('tab');
  
  sendMsg({
    status: 1,
    msg: 'tab mounted'
  })
  
  // channel.value = new MessageChannel();
  // // const output = document.querySelector('.output');
  // const iframe = document.querySelector('iframe');

  // // Wait for the iframe to load
  // iframe?.addEventListener("load", onLoad);

  // function onLoad() {
  //   // Listen for messages on port1
  //   channel.value.port1.onmessage = onMessage;
  //   // Transfer port2 to the iframe
  //   iframe?.contentWindow?.postMessage("init", "*", [
  //     channel.value.port2,
  //   ]);
  // }

  // // Handle messages received on port1
  // function onMessage(e) {
  //   // output.innerHTML = e.data;
  //   msg.value = e.data;
  // }

})

</script>

<style lang='stylus' scoped>

</style>