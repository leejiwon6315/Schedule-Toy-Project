import style from "./InputBoxStyle.module.scss";
import InputDayTime from "./InputDayTime/InputDayTime";
import InputText from "./InputText/InputText";
import { useState, useCallback, useRef } from "react";

const InputBox = ({ modalState, closeModal, addData }) => {
  const nextIndex = useRef(2);
  const checkTimeCorrect = useRef(true);
  const [input, setInput] = useState({
    name: "",
    place: "",
  });
  const [schedule, setSchedule] = useState([
    {
      index: 1,
      date: 1,
      startHour: "08",
      startMin: "00",
      endHour: "08",
      endMin: "00",
    },
  ]);

  const resetData = () => {
    setInput({
      name: "",
      place: "",
    });
    setSchedule([
      {
        index: 1,
        date: 1,
        startHour: "08",
        startMin: "00",
        endHour: "08",
        endMin: "00",
      },
    ]);
    nextIndex.current = 2;
  };

  const onChangeTime = useCallback((index, timeData) => {
    setSchedule((schedule) =>
      schedule.map((schedule) =>
        schedule.index === index
          ? {
              ...schedule,
              ...timeData,
            }
          : schedule
      )
    );
  }, []);

  const onChangeTxt = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddData = () => {
    if (input.name === "") {
      alert("일정/과목명을 입력해 주세요");
      return;
    }

    schedule.forEach((elem) => {
      if (
        elem.startHour > elem.endHour ||
        (elem.startHour === elem.endHour && elem.startMin >= elem.endMin)
      ) {
        checkTimeCorrect.current = false;
      }
    });

    if (checkTimeCorrect.current) {
      addData({ ...input, schedule: schedule });
      resetData();
    } else {
      alert("정확한 시간을 입력해 주세요");
      checkTimeCorrect.current = true;
      return;
    }
  };

  const addNewDayTime = () => {
    if (nextIndex.current === 5) {
      alert("최대 4타임까지만 중복입력 가능합니다");
      return;
    }

    const newData = {
      index: nextIndex.current,
      date: 1,
      startHour: "08",
      startMin: "00",
      endHour: "08",
      endMin: "00",
    };

    setSchedule(schedule.concat(newData));
    nextIndex.current += 1;
  };

  const closeModalInside = () => {
    resetData();
    closeModal();
  };

  return (
    <>
      {modalState ? (
        <div className={style.input_wrapper}>
          <button className={style.close_button} onClick={closeModalInside}>
            ×
          </button>

          <div className={style.input_wrapper_sub}>
            <div className={style.input_title}>
              <h3>일정</h3>
              <h3>추가 정보</h3>
              <h3>날짜/시간</h3>
            </div>

            <div className={style.input_body}>
              <InputText input={input} onChangeTxt={onChangeTxt} />

              {schedule.map((schedule) => (
                <InputDayTime
                  key={schedule.index}
                  onChangeTime={onChangeTime}
                  index={schedule.index}
                />
              ))}
            </div>
          </div>

          <button className={style.add_new_daytime} onClick={addNewDayTime}>
            +
          </button>

          <button className={style.input_box_button} onClick={handleAddData}>
            추가하기
          </button>
        </div>
      ) : null}
    </>
  );
};

export default InputBox;
