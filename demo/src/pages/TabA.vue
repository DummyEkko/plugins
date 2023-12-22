<template>
  <div>
      tab a : {{ x }}, {{ y }}
  </div>
  <!-- <iframe id="myIframe" src="http://127.0.0.1:5501/demo/iframe.html" frameborder="0"></iframe> -->
</template>

<script lang='ts' setup>
import { useSharedMouse } from '@dummy/hooks'


const { x, y } = useSharedMouse()


</script>

<style lang='stylus' scoped>

</style>