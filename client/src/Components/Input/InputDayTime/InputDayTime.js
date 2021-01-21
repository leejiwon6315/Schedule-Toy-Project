import InputDayList from "./InputDayList";
import InputTimeList from "./InputTimeList";
import { daysData } from "../../../dataBundle";
import style from "../InputBoxStyle.module.scss";
import { useCallback, useState, forwardRef, useImperativeHandle } from "react";

const InputDayTime = forwardRef(
  ({ index, onChangeTime, schedule, removeDayTime }, ref) => {
    const [daysDataArray, setArrayData] = useState(daysData);

    const handleClick = useCallback(
      (e) => {
        onChangeTime(index, "date", e.target.value);
      },
      [index, onChangeTime]
    );

    const handleChange = useCallback(
      (e) => {
        const { name, value } = e.target;
        onChangeTime(index, name, value);
      },
      [index, onChangeTime]
    );

    const handleToggle = useCallback((id) => {
      setArrayData((daysInfo) =>
        daysInfo.map((data) =>
          data.id === id
            ? { ...data, checked: true }
            : { ...data, checked: false }
        )
      );
    }, []);

    const remove = () => {
      removeDayTime(index);
    };

    useImperativeHandle(ref, () => ({
      resetDays() {
        setArrayData([
          { name: "월", id: 1, checked: true },
          { name: "화", id: 2, checked: false },
          { name: "수", id: 3, checked: false },
          { name: "목", id: 4, checked: false },
          { name: "금", id: 5, checked: false },
          { name: "토", id: 6, checked: false },
        ]);
      },
    }));

    return (
      <>
        {index > 1 ? (
          <button className={style.daytime_delete} onClick={remove}>
            삭제
          </button>
        ) : null}
        <ol className={style.day_check_wrapper} onClick={handleClick}>
          {daysDataArray.map((data) => (
            <InputDayList
              data={data}
              handleToggle={handleToggle}
              key={data.id}
            />
          ))}
        </ol>

        <InputTimeList schedule={schedule} handleChange={handleChange} />
      </>
    );
  }
);

export default InputDayTime;
