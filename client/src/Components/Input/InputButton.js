import React, { useState } from "react";
import useInput from "../../Hook/useInput";
import InputBox from "./InputBox";
import style from "./InputButtonStyle.module.scss";

const InputButton = () => {
  const [modalState, setOpen] = useState(false);
  const [name, setName, onChangeName] = useInput("");
  const [place, setPlace, onChangePlace] = useInput("");

  const handleSubmit = () => {
    if (name === "") {
      alert("일정(과목명)을 입력해 주세요");
      return;
    }
    setName("");
    setPlace("");
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div onClick={openModal} className={style.input_button}>
        + &nbsp; 일정 추가 &nbsp;
      </div>
      <InputBox
        modalState={modalState}
        closeModal={closeModal}
        name={name}
        place={place}
        onChangeName={onChangeName}
        onChangePlace={onChangePlace}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default InputButton;
