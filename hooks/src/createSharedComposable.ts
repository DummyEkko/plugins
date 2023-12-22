import { effectScope, onScopeDispose } from 'vue';

type Composable<T extends any[] = any[], R = any> = (...args: T) => R;

function createSharedComposable<T extends any[] = any[], R = any>(composable: Composable<T, R>): Composable<T, R> {
  let subscribers = 0;
  let state: R | null = null;
  let scope: ReturnType<typeof effectScope> | null = null;

  const dispose = () => {
    if (scope && --subscribers <= 0) {
      scope.stop();
      state = scope = null;
    }
  };

  return (...args: T): R => {
    subscribers++;
    if (!state) {
      scope = effectScope(true);
      const result = scope.run(() => composable(...args));
      if (result !== undefined) {
        state = result;
      }
    }
    onScopeDispose(dispose);
    return state as R;
  };
}

export default createSharedComposable