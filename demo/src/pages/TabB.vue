<template>
  <div>
    tab-b {{ msg }}
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue';

import { useMessage } from '@dummy/hooks'

const msg = ref()

const {  } = useMessage<{ status: number, msg: string }>({
  name: 'test',
  onMsg: (data) => {
    msg.value = data.msg

  }
})
</script>

<style lang='stylus' scoped>

</style>