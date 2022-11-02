import { EffectCallback, useEffect, useRef } from 'react';

export const useMount = (effect: EffectCallback) => {
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) {
      return effect();
    }

    mounted.current = true;

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }, [mounted, effect]);
};
