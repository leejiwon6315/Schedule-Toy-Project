import React, { useState } from "react";
import InputBox from "./InputBox";

const InputButton = () => {
  const [modalOpen, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          !modalOpen ? setOpen(true) : setOpen(false);
          console.log(modalOpen);
        }}
      >
        시간표 추가
      </button>

      <InputBox />
    </>
  );
};

export default InputButton;
