import { useState, useEffect } from 'react';

export const useLocalStorage = (key: string, defaultVal: string) => {
  const [state, setState] = useState(() => {
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
      window.localStorage.setItem(key, state);
    } catch (error) {
      localStorage.clear();
    }
  }, [state, key]);

  return [state, setState];
};
