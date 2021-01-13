import React, { useState } from "react";
import InputBox from "./InputBox";
import style from "./InputButtonStyle.module.scss";

const InputButton = () => {
  const [modalState, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };
  return (
    <>
      <div onClick={openModal} className={style.input_button}>
        + &nbsp; 시간표 추가
      </div>
      <InputBox modalState={modalState} closeModal={closeModal} />
    </>
  );
};

export default InputButton;
