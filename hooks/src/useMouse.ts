
import { ref, onScopeDispose } from 'vue'
import createSharedComposable from './createSharedComposable'

function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function handler(e: MouseEvent) {
    x.value = e.x
    y.value = e.y
  }
  window.addEventListener('mousemove', handler)

  onScopeDispose(() => {
    window.removeEventListener('mousemove', handler)
  })

  return { x, y }
}

const useSharedMouse = createSharedComposable(useMouse)

export {
  useSharedMouse
} 