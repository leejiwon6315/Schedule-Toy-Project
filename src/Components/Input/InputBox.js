import React from "react";
import style from "./InputBoxStyle.module.scss";

const InputBox = ({ modalState, closeModal }) => {
  return (
    <>
      {modalState ? (
        <div className={style.input_wrapper}>
          <button className={style.close_button} onClick={closeModal}>
            X
          </button>

          <div className={style.input_wrapper_sub}>
            <div className={style.input_title}>
              <h3>일정</h3>
              <h3>추가 정보</h3>
              <h3>날짜/시간</h3>
            </div>

            <div className={style.input_body}>
              <input type="text" placeholder="과목명/할일"></input>
              <input type="text" placeholder="교수명/강의실"></input>

              <ol className={style.listOl}>
                <li className={style.listLi}>월</li>
                <li className={style.listLi}>화</li>
                <li className={style.listLi}>수</li>
                <li className={style.listLi}>목</li>
                <li className={style.listLi}>금</li>
                <li className={style.listLi}>토</li>
              </ol>

              <div className={style.select_wrapper}>
                <select name="startHour">
                  <option value="">08시</option>
                  <option value="">09시</option>
                  <option value="">10시</option>
                  <option value="">11시</option>
                  <option value="">12시</option>
                  <option value="">13시</option>
                  <option value="">14시</option>
                  <option value="">15시</option>
                  <option value="">16시</option>
                  <option value="">17시</option>
                  <option value="">18시</option>
                  <option value="">19시</option>
                </select>
                <select name="startMin">
                  <option value="">0분</option>
                  <option value="">5분</option>
                  <option value="">10분</option>
                  <option value="">15분</option>
                  <option value="">20분</option>
                  <option value="">25분</option>
                  <option value="">30분</option>
                  <option value="">35분</option>
                  <option value="">40분</option>
                  <option value="">45분</option>
                  <option value="">50분</option>
                  <option value="">55분</option>
                </select>
                <h4>~</h4>
                <select name="endHour">
                  <option value="">08시</option>
                  <option value="">09시</option>
                  <option value="">10시</option>
                  <option value="">11시</option>
                  <option value="">12시</option>
                  <option value="">13시</option>
                  <option value="">14시</option>
                  <option value="">15시</option>
                  <option value="">16시</option>
                  <option value="">17시</option>
                  <option value="">18시</option>
                  <option value="">19시</option>
                </select>
                <select name="endMin">
                  <option value="">0분</option>
                  <option value="">5분</option>
                  <option value="">10분</option>
                  <option value="">15분</option>
                  <option value="">20분</option>
                  <option value="">25분</option>
                  <option value="">30분</option>
                  <option value="">35분</option>
                  <option value="">40분</option>
                  <option value="">45분</option>
                  <option value="">50분</option>
                  <option value="">55분</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default InputBox;
