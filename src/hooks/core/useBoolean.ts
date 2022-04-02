import { useMemo, useState } from "react";

type TUseBooleanReturn = [
  value: boolean,
  callback: {
    on: () => void;
    off: () => void;
    toggle: () => void;
  }
];

/**
 * React hook to manage boolean states
 * @param initialValue boolean or undefined
 * @returns current value, callbacks to set on, off, and toggle
 */

const useBoolean = (initialValue?: boolean): TUseBooleanReturn => {
  const [value, setValue] = useState<boolean>(initialValue || false);

  const callbacks = useMemo(
    () => ({
      on: () => setValue(true),
      off: () => setValue(false),
      toggle: () => setValue((prev) => !prev),
    }),
    []
  );

  return [value, callbacks];
};

export default useBoolean;
