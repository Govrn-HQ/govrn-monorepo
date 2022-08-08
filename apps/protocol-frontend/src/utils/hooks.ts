import { useState, useEffect } from 'react';

export const useLocalStorage = (key: string, defaultVal: any) => {
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
      window.localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      localStorage.clear();
    }
  }, [state, key]);

  return [state, setState];
};
