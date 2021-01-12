import React from "react";
import style from "./InputBoxStyle.module.scss";

const InputBox = () => {
  return (
    <div className={style.input_wrapper}>
      <div className={style.input_body}>
        <h3> 일정/수업</h3>
        <input type="text"></input>
        <h3>시작시간</h3>
        <select name="time">
          <option value="">08:00 - 08:30</option>
          <option value="">08:30 - 09:00</option>
          <option value="">09:00 - 09:30</option>
          <option value="">09:30 - 10:00</option>
          <option value="">10:00 - 10:30</option>
          <option value="">10:30 - 11:00</option>
          <option value="">11:00 - 11:30</option>
          <option value="">11:30 - 12:00</option>
          <option value="">12:00 - 12:30</option>
          <option value="">12:30 - 13:00</option>
          <option value="">13:00 - 13:30</option>
          <option value="">13:30 - 14:00</option>
          <option value="">14:00 - 14:30</option>
          <option value="">14:30 - 15:00</option>
          <option value="">15:00 - 15:30</option>
          <option value="">15:30 - 16:00</option>
          <option value="">16:00 - 16:30</option>
          <option value="">16:30 - 17:00</option>
          <option value="">17:00 - 17:30</option>
          <option value="">17:30 - 18:00</option>
          <option value="">18:00 - 18:30</option>
          <option value="">18:30 - 19:00</option>
          <option value="">19:00 - 19:30</option>
          <option value="">19:30 - 20:00</option>
        </select>
        <h3>종료시간</h3>
        <select name="time">
          <option value="">08:00 - 08:30</option>
          <option value="">08:30 - 09:00</option>
          <option value="">09:00 - 09:30</option>
          <option value="">09:30 - 10:00</option>
          <option value="">10:00 - 10:30</option>
          <option value="">10:30 - 11:00</option>
          <option value="">11:00 - 11:30</option>
          <option value="">11:30 - 12:00</option>
          <option value="">12:00 - 12:30</option>
          <option value="">12:30 - 13:00</option>
          <option value="">13:00 - 13:30</option>
          <option value="">13:30 - 14:00</option>
          <option value="">14:00 - 14:30</option>
          <option value="">14:30 - 15:00</option>
          <option value="">15:00 - 15:30</option>
          <option value="">15:30 - 16:00</option>
          <option value="">16:00 - 16:30</option>
          <option value="">16:30 - 17:00</option>
          <option value="">17:00 - 17:30</option>
          <option value="">17:30 - 18:00</option>
          <option value="">18:00 - 18:30</option>
          <option value="">18:30 - 19:00</option>
          <option value="">19:00 - 19:30</option>
          <option value="">19:30 - 20:00</option>
        </select>
        <h3>기타</h3>
        <input type="text"></input>
      </div>
    </div>
  );
};

export default InputBox;
