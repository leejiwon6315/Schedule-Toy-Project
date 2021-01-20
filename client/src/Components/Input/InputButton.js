import { useState } from "react";
import { useCallback } from "react/cjs/react.development";
import InputBox from "./InputBox";
import style from "./InputButtonStyle.module.scss";

const InputButton = ({ addData }) => {
  const [modalState, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <div onClick={openModal} className={style.input_button}>
        + &nbsp; 일정 추가 &nbsp;
      </div>
      <InputBox
        modalState={modalState}
        closeModal={closeModal}
        addData={addData}
      />
    </>
  );
};

export default InputButton;
