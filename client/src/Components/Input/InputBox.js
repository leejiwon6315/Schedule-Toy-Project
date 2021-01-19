import style from "./InputBoxStyle.module.scss";
import InputDayTime from "./InputDayTime/InputDayTime";
import { useState } from "react";
let nextIndex = 2;

const InputBox = ({ modalState, closeModal, addData }) => {
  const [input, setInput] = useState({
    name: "",
    place: "",
  });

  const [schedule, setSchedule] = useState([
    {
      index: "1",
      date: 1,
      startHour: "08",
      startMin: "00",
      endHour: "08",
      endMin: "00",
    },
  ]);

  const onChangeTime = (index, timeData) => {
    setSchedule(
      schedule.map((schedule) =>
        schedule.index === index
          ? {
              ...schedule,
              ...timeData,
            }
          : schedule
      )
    );
  };

  const handleAddData = () => {
    if (input.name === "") {
      alert("일정(과목명)을 입력해 주세요");
      return;
    }

    addData({ ...input, schedule: schedule });

    setInput({
      name: "",
      place: "",
    });
    setSchedule([
      {
        index: "1",
        date: 1,
        startHour: "08",
        startMin: "00",
        endHour: "08",
        endMin: "00",
      },
    ]);
    nextIndex = 2;
  };

  const addNewDayTime = () => {
    const newData = {
      index: String(nextIndex),
      date: 1,
      startHour: "08",
      startMin: "00",
      endHour: "08",
      endMin: "00",
    };
    setSchedule(schedule.concat(newData));
    nextIndex++;
  };

  const onChangeTxt = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
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
                onChange={onChangeTxt}
                placeholder="일정 / 과목명 (필수입력)"
              />
              <input
                className={style.input_content}
                type="text"
                name="place"
                value={input.place}
                onChange={onChangeTxt}
                placeholder="교수명 / 강의실"
              />

              {schedule.map((schedule) => (
                <InputDayTime
                  key={schedule.index}
                  onChange={onChangeTime}
                  index={schedule.index}
                />
              ))}
            </div>
          </div>

          <button onClick={addNewDayTime}> + </button>

          <button className={style.input_box_button} onClick={handleAddData}>
            추가하기
          </button>
        </div>
      ) : null}
    </>
  );
};

export default InputBox;
