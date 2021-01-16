import { useState } from "react";
import InputBox from "./InputBox";
import style from "./InputButtonStyle.module.scss";

const InputButton = ({
  name,
  place,
  date,
  startHour,
  startMin,
  endHour,
  endMin,
  onClickDate,
  onChangeTimeSH,
  onChangeTimeSM,
  onChangeTimeEH,
  onChangeTimeEM,
  onChangeName,
  onChangePlace,
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
        startHour={startHour}
        startMin={startMin}
        endHour={endHour}
        endMin={endMin}
        onChangeTimeSH={onChangeTimeSH}
        onChangeTimeSM={onChangeTimeSM}
        onChangeTimeEH={onChangeTimeEH}
        onChangeTimeEM={onChangeTimeEM}
        onChangeName={onChangeName}
        onChangePlace={onChangePlace}
        onClickDate={onClickDate}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default InputButton;
