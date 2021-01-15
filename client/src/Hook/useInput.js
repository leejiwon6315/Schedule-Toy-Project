import { useState } from "react";

const useInput = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const onChange = (e) => {
    const {
      target: { value },
    } = e;
    setState(value);
  };

  return [state, setState, onChange];
};

export default useInput;
