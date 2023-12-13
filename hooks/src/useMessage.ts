import { onMounted, onUnmounted, ref, effectScope } from 'vue'


interface Options<T> {
  name: string;
  onMsg: (msg: T, e: MessageEvent<any> | StorageEvent) => void;
}

interface Return<T> {
  sendMsg: (msg: T) => void;
  close: () => void;
}


/**
 * 注册一个通信频道，用于tab通信
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

  const initLocalStorage = (event: StorageEvent) => {
    debugger
    if (event.key === name) {
      // 处理值的变化
      console.log('新的值是：' + event.newValue);
      if (!event.newValue) {
        return
      }
      const data = JSON.parse(event.newValue)
      onMsg?.(data, event)
    }
  }
  
  const sendMsg = (data: T) => {
    if (channel.value) {
      channel.value.postMessage(data);
      return
    }
    localStorage.setItem(name, JSON.stringify(data));
  }

  const close = () => channel.value?.close?.()

  onMounted(() => {
    if (typeof BroadcastChannel === 'function') {
      initBroadcastChannel()
    } else {
      // 在标签页B中监听storage事件
      window.addEventListener('storage', initLocalStorage);
    }
  })

  onUnmounted(() => {
    close()
    window.removeEventListener('storage', initLocalStorage)
  })
  

  return {
    sendMsg,
    close,
  }
}