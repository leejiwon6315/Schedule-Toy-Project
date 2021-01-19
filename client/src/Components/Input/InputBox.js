import style from "./InputBoxStyle.module.scss";
import { daysData } from "../../dataBundle";
import InputDayList from "./InputDayList";
import InputTimeList from "./InputTimeList";
import { useCallback, useState } from "react";

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
  const [daysDataArray, setArrayData] = useState(daysData);

  const handleOnOff = useCallback((id) => {
    setArrayData((daysInfo) =>
      daysInfo.map((data) =>
        data.id === id
          ? { ...data, checked: true }
          : { ...data, checked: false }
      )
    );
  }, []);

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

              <ol
                className={style.day_check_wrapper}
                onClick={onClickDate}
                value={date}
              >
                {daysDataArray.map((data) => (
                  <InputDayList
                    data={data}
                    onClick={handleOnOff}
                    key={data.id}
                  />
                ))}
              </ol>

              <InputTimeList
                startHour={startHour}
                startMin={startMin}
                endHour={endHour}
                endMin={endMin}
                onChangeTimeSH={onChangeTimeSH}
                onChangeTimeSM={onChangeTimeSM}
                onChangeTimeEH={onChangeTimeEH}
                onChangeTimeEM={onChangeTimeEM}
              />
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
