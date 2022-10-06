import { useState, useEffect } from 'react';

type JsonLike = string | number | boolean | { [k: string]: unknown };

export const useLocalStorage = <S extends JsonLike>(
  key: string,
  defaultVal: S,
) => {
  const [state, setState] = useState<S>(() => {
    let val;
    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      val = defaultVal;
    }
    return val;
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      localStorage.clear();
    }
  }, [state, key]);

  return [state, setState] as const;
};
