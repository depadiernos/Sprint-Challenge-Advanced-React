import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [localValue, setLocalValue] = useState(() => {
    const item = window.localStorage.getItem(key)||initialValue;
    return item;
  });

  const setValue = value => {
    window.localStorage.setItem(key, value);
    setLocalValue(value);
  };

  return [localValue, setValue];
};
