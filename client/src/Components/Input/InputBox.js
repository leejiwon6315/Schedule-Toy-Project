import style from "./InputBoxStyle.module.scss";
import { daysData } from "../../dataBundle";
import InputDayList from "./InputDayList";
import InputTimeList from "./InputTimeList";
import { useCallback, useState } from "react";

const InputBox = ({ modalState, closeModal, addData }) => {
  const [daysDataArray, setArrayData] = useState(daysData);
  const [input, setInput] = useState({
    name: "",
    place: "",
    date: 1,
    startHour: "08",
    startMin: "00",
    endHour: "08",
    endMin: "00",
  });

  const handleOnOff = useCallback((id) => {
    setArrayData((daysInfo) =>
      daysInfo.map((data) =>
        data.id === id
          ? { ...data, checked: true }
          : { ...data, checked: false }
      )
    );
  }, []);

  const handleAddData = () => {
    addData(input);
    setInput({
      name: "",
      place: "",
      date: 1,
      startHour: "08",
      startMin: "00",
      endHour: "08",
      endMin: "00",
    });

    setArrayData(daysData);
  };

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = (e) => {
    setInput({
      ...input,
      date: e.target.value,
    });
  };

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
                value={input.name}
                onChange={onChange}
                placeholder="일정 / 과목명 (필수입력)"
              />
              <input
                className={style.input_content}
                type="text"
                name="place"
                value={input.place}
                onChange={onChange}
                placeholder="교수명 / 강의실"
              />

              <ol
                className={style.day_check_wrapper}
                onClick={onClick}
                value={input.date}
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
                startHour={input.startHour}
                startMin={input.startMin}
                endHour={input.endHour}
                endMin={input.endMin}
                onChange={onChange}
              />
            </div>
          </div>

          <button className={style.input_box_button} onClick={handleAddData}>
            추가하기
          </button>
        </div>
      ) : null}
    </>
  );
};

export default InputBox;
