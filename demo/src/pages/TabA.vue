<template>
  <div>
    tab-a
  </div>
  <textarea v-model="msg" cols="30" rows="10" @blur="onBlur"></textarea>
</template>

<script lang='ts' setup>
import { onMounted, ref } from 'vue';
import { useMessage } from '@dummy/hooks'

const msg = ref()

const { sendMsg } = useMessage<{ status: number, msg: string }>({
  name: 'test',
  onMsg: () => {

  }
})

const onBlur = () => {
  sendMsg({
    status: 1,
    msg: msg.value
  })
}

onMounted(() => {
  sendMsg({
    status: 1,
    msg: 'a'
  })
})

</script>

<style lang='stylus' scoped>

</style>