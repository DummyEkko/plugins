import { onScopeDispose, effectScope } from 'vue'
import type { EffectScope  } from 'vue'

function createSharedComposable<T extends (...args: any[]) => any>(composable: T) {
  let subscribers = 0
  let state: ReturnType<T> | null = null;
  let scope: EffectScope | null = null;

  const dispose = () => {
    if (scope && --subscribers <= 0) {
      scope.stop()
      state = scope = null
    }
  }

  return (...args: Parameters<T>): ReturnType<T> => {
    subscribers++
    if (!state) {
      scope = effectScope(true)
      state = scope.run<typeof composable>(() => composable(...args)) as ReturnType<T>
    }
    onScopeDispose(dispose)
    return state as ReturnType<T>
  }
}

export {
  createSharedComposable
}
