import { useState } from "react";

const useSelect = (initialValue) => {
  const [state, setState] = useState(initialValue);

  const onClick = (e) => {
    const {
      target: { value },
    } = e;
    setState(value);
  };

  return [state, setState, onClick];
};

export default useSelect;
