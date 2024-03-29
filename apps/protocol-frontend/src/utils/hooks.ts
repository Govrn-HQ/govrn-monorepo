import { useState, useEffect, Dispatch, SetStateAction } from 'react';

type JsonLike = string | number | boolean | { [k: string]: unknown };

export const useLocalStorage = <S extends JsonLike>(
  key: string,
  defaultVal: S,
): [S, Dispatch<SetStateAction<S>>] => {
  const [state, setState] = useState<S>(() => {
    try {
      return JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
    } catch (e) {
      return defaultVal;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      localStorage.clear();
    }
  }, [state, key]);

  return [state, setState];
};
