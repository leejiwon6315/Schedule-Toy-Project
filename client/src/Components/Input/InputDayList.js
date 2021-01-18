import style from "./InputBoxStyle.module.scss";
import { useState } from "react";

const InputDayList = ({ name, val }) => {
  const [isChecked, setCheck] = useState(false);

  const checkRadio = () => {
    if (!isChecked) setCheck(true);
    else setCheck(false);
  };

  return (
    <>
      <label
        htmlFor={name}
        className={style.day_check}
        style={{
          backgroundColor: isChecked
            ? "rgb(93, 185, 170)"
            : "rgba(48, 48, 48, 0.26)",
          color: isChecked ? "white" : "rgba(10, 10, 10, 0.438)",
        }}
      >
        {name}
      </label>
      <input
        type="radio"
        name="day"
        value={val}
        id={name}
        onChange={checkRadio}
      />
    </>
  );
};

export default InputDayList;
