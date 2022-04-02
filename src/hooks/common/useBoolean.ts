import { useState } from "react";

type TUseBooleanReturn = [
  value: boolean,
  setTrue: () => void,
  setFalse: () => void
];

/**
 * React hook to manage boolean states
 * @param initialValue boolean or undefined
 * @returns current value, setTrue and setFalse methods
 */

const useBoolean = (initialValue?: boolean): TUseBooleanReturn => {
  const [value, setValue] = useState<boolean>(initialValue || false);

  const setTrue = () => setValue(true);
  const setFalse = () => setValue(false);

  return [value, setTrue, setFalse];
};

export default useBoolean;
