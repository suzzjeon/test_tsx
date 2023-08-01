import { useState, ChangeEventHandler } from "react";

const useInput = (initialValue = "") => {
  const [inputValue, setInputValue] = useState<string>(initialValue);

  const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (
    e
  ) => {
    setInputValue(e.target.value);
  };

  return [inputValue, onChange] as const;
};

export default useInput;
