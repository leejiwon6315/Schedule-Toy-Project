import InputDayList from "./InputDayList";
import InputTimeList from "./InputTimeList";
import { daysData } from "../../../dataBundle";
import style from "../InputBoxStyle.module.scss";
import { useCallback, useState } from "react";

const InputDayTime = ({ index, onChangeTime, schedule }) => {
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

  return (
    <>
      {index > 1 ? (
        <button className={style.daytime_delete}>삭제</button>
      ) : null}
      <ol className={style.day_check_wrapper} onClick={handleClick}>
        {daysDataArray.map((data) => (
          <InputDayList data={data} handleToggle={handleToggle} key={data.id} />
        ))}
      </ol>

      <InputTimeList schedule={schedule} handleChange={handleChange} />
    </>
  );
};

export default InputDayTime;
