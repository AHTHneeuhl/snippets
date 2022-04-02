import { useState } from "react";

type TUseToggleReturn = [
  value: boolean,
  handleToggle: (value?: boolean) => void
];

/**
 * React hook to manage boolean states
 * @param initialValue boolean or undefined
 * @returns current value, handleToggle method
 */

const useToggle = (initialValue?: boolean): TUseToggleReturn => {
  const [value, setValue] = useState<boolean>(initialValue || false);

  const handleToggle = (value?: boolean) => {
    if (typeof value === "boolean") {
      setValue(value);
      return;
    }
  };

  return [value, handleToggle];
};

export default useToggle;
