import React, { useState } from "react";
import InputBox from "./InputBox";

const InputButton = () => {
  const [modalState, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
    console.log(modalState);
  };

  const closeModal = () => {
    setOpen(false);
    console.log(modalState);
  };
  return (
    <>
      <button onClick={openModal}>시간표 추가</button>
      <InputBox modalState={modalState} closeModal={closeModal} />
    </>
  );
};

export default InputButton;
