import { useEffect, useState, useRef } from 'react';

export default function useKeyboardInput(initialValue, validKeys = []) {
  const [value, setValue] = useState(initialValue);
  const refValue = useRef(initialValue);
  const refValidKeys = useRef(validKeys);
  const [keyDownEvent, setKeyDownEvent] = useState(null);

  useEffect(() => {
    setKeyDownEvent(
      null
    ); /** Necessary to avoid computation of useEffect on initalValue change when event is old --> see test of '-' sign */
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    refValue.current = value;
  }, [value]);

  useEffect(() => {
    refValidKeys.current = validKeys;
  }, [validKeys]);

  function keyDownHandler(event) {
    const { key } = event;
    setKeyDownEvent(event);
    if (key === 'Backspace') {
      setValue(refValue.current.slice(0, -1));
    } else if (refValidKeys.current.length > 0) {
      if (refValidKeys.current.includes(key)) {
        const currentValue = (refValue.current || "").replace(/^0+/, '');
        if (currentValue.length < 6) {
          setValue(currentValue + key);
        }
      }
    }
  }

  function virtualInteraction(key) {
    keyDownHandler(new KeyboardEvent('keydown', { key }));
  }
  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);

    return function cleanup() {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return { value, keyDownEvent, virtualInteraction };
}
