import style from "./InputBoxStyle.module.scss";
import { daysData } from "../../dataBundle";
import { useState } from "react";

const InputDayList = ({ date, onClickDate }) => {
  const [isChecked, setCheck] = useState(false);

  const checkRadio = () => {
    if (!isChecked) setCheck(true);
    else setCheck(false);
  };

  return (
    <div className={style.day_check_wrapper} onClick={onClickDate} value={date}>
      {daysData.map((data) => (
        <>
          <label
            htmlFor={data.name}
            className={style.day_check}
            style={{
              backgroundColor: isChecked
                ? "rgb(93, 185, 170)"
                : "rgba(48, 48, 48, 0.26)",
              color: isChecked ? "white" : "rgba(10, 10, 10, 0.438)",
            }}
          >
            {data.name}
          </label>
          <input
            type="radio"
            name="day"
            value={data.val}
            id={data.name}
            onChange={checkRadio}
          />
        </>
      ))}
    </div>
  );
};

export default InputDayList;
