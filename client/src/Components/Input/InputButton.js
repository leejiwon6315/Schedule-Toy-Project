import React, { useState } from "react";
import InputBox from "./InputBox";
import style from "./InputButtonStyle.module.scss";

const InputButton = ({
  name,
  place,
  date,
  onChangeName,
  onChangePlace,
  onClickDate,
  handleSubmit,
}) => {
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
        + &nbsp; 일정 추가 &nbsp;
      </div>
      <InputBox
        modalState={modalState}
        closeModal={closeModal}
        name={name}
        place={place}
        date={date}
        onChangeName={onChangeName}
        onChangePlace={onChangePlace}
        onClickDate={onClickDate}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default InputButton;
