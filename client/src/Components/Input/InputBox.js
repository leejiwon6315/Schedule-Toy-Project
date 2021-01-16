import React from "react";
import style from "./InputBoxStyle.module.scss";

const InputBox = ({
  modalState,
  closeModal,
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
  onSubmit,
}) => {
  return (
    <>
      {modalState ? (
        <div className={style.input_wrapper}>
          <button className={style.close_button} onClick={closeModal}>
            ×
          </button>

          <div className={style.input_wrapper_sub}>
            <div className={style.input_title}>
              <h3>일정</h3>
              <h3>추가 정보</h3>
              <h3>날짜/시간</h3>
            </div>

            <div className={style.input_body}>
              <input
                className={style.input_content}
                type="text"
                name="name"
                value={name}
                onChange={onChangeName}
                placeholder="일정 / 과목명 (필수입력)"
              />
              <input
                className={style.input_content}
                type="text"
                name="place"
                value={place}
                onChange={onChangePlace}
                placeholder="교수명 / 강의실"
              />

              <ol className={style.listOl} onClick={onClickDate} value={date}>
                <li className={style.listLi} value="1">
                  월
                </li>
                <li className={style.listLi} value="2">
                  화
                </li>
                <li className={style.listLi} value="3">
                  수
                </li>
                <li className={style.listLi} value="4">
                  목
                </li>
                <li className={style.listLi} value="5">
                  금
                </li>
                <li className={style.listLi} value="6">
                  토
                </li>
              </ol>

              <div className={style.select_wrapper}>
                <select
                  name="startHour"
                  value={startHour}
                  onChange={onChangeTimeSH}
                >
                  <option value="08">08시</option>
                  <option value="09">09시</option>
                  <option value="10">10시</option>
                  <option value="11">11시</option>
                  <option value="12">12시</option>
                  <option value="13">13시</option>
                  <option value="14">14시</option>
                  <option value="15">15시</option>
                  <option value="16">16시</option>
                  <option value="17">17시</option>
                  <option value="18">18시</option>
                  <option value="19">19시</option>
                </select>
                <select
                  name="startMin"
                  value={startMin}
                  onChange={onChangeTimeSM}
                >
                  <option value="00">0분</option>
                  <option value="05">5분</option>
                  <option value="10">10분</option>
                  <option value="15">15분</option>
                  <option value="20">20분</option>
                  <option value="25">25분</option>
                  <option value="30">30분</option>
                  <option value="35">35분</option>
                  <option value="40">40분</option>
                  <option value="45">45분</option>
                  <option value="50">50분</option>
                  <option value="55">55분</option>
                </select>
                <h4>~</h4>
                <select
                  name="endHour"
                  value={endHour}
                  onChange={onChangeTimeEH}
                >
                  <option value="08">08시</option>
                  <option value="09">09시</option>
                  <option value="10">10시</option>
                  <option value="11">11시</option>
                  <option value="12">12시</option>
                  <option value="13">13시</option>
                  <option value="14">14시</option>
                  <option value="15">15시</option>
                  <option value="16">16시</option>
                  <option value="17">17시</option>
                  <option value="18">18시</option>
                  <option value="19">19시</option>
                </select>
                <select name="endMin" value={endMin} onChange={onChangeTimeEM}>
                  <option value="00">0분</option>
                  <option value="05">5분</option>
                  <option value="10">10분</option>
                  <option value="15">15분</option>
                  <option value="20">20분</option>
                  <option value="25">25분</option>
                  <option value="30">30분</option>
                  <option value="35">35분</option>
                  <option value="40">40분</option>
                  <option value="45">45분</option>
                  <option value="50">50분</option>
                  <option value="55">55분</option>
                </select>
              </div>
            </div>
          </div>
          <button className={style.input_box_button} onClick={onSubmit}>
            추가하기
          </button>
        </div>
      ) : null}
    </>
  );
};

export default InputBox;
