import { onMounted, onUnmounted, ref } from 'vue'


interface Options<T> {
  name: string;
  onMsg: (msg: T, e: MessageEvent<any>) => void;
}

interface Return<T> {
  sendMsg: (msg: T) => void;
  close: () => void;
}


/**
 * 注册一个通信频道，用于tab、或者iframe通信
 * @param {string} name - 注册通道用的名字
 * @param {Function} onMsg 监听消息返回
 * @returns {Return}
 */

export function useMessage<T>({
  name = 'test_channel',
  onMsg
}: Options<T>): Return<T> {

  const channel = ref<BroadcastChannel>()
  
  const initBroadcastChannel = () => {
    channel.value = new BroadcastChannel(name);
    // 监听消息
    channel.value.onmessage = function(event) {
      onMsg?.(event.data, event)
      console.log('Received message:', event.data);
    };
  }
  
  const sendMsg = (data: T) => {
    if (!channel.value) return
    // 发送消息
    channel.value.postMessage(data);
  }

  const close = () => channel.value?.close?.()

  onMounted(() => {
    if (typeof BroadcastChannel === 'function') {
      initBroadcastChannel()
    } else {
      // 监听 localstorege
    }
  })

  onUnmounted(() => {
    close()
  })
  

  return {
    sendMsg,
    close
  }
}