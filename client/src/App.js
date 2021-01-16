import { useState } from "react";
import useInput from "./Hook/useInput";
import useSelect from "./Hook/useSelect";
import InputButton from "./Components/Input/InputButton";
import ScheduleList from "./Components/Schedule/ScheduleList";
import TimeLine from "./Components/TimeLine/TimeLine";
import { virtualData } from "./dataBundle";
import style from "./App.module.scss";

const App = () => {
  const [data, setDataList] = useState(virtualData);
  const [name, setName, onChangeName] = useInput("");
  const [place, setPlace, onChangePlace] = useInput("");
  const [startHour, setSH, onChangeTimeSH] = useInput("08");
  const [startMin, setSM, onChangeTimeSM] = useInput("00");
  const [endHour, setEH, onChangeTimeEH] = useInput("08");
  const [endMin, setEM, onChangeTimeEM] = useInput("00");
  const [date, setDate, onClickDate] = useSelect("1");

  let nextId = Object.keys(virtualData).length;
  const setNextId = () => {
    nextId++;
  };

  const handleSubmit = () => {
    if (name === "") {
      alert("일정(과목명)을 입력해 주세요");
      return;
    }

    if (startHour > endHour || (startHour === endHour && startMin >= endMin)) {
      alert("정확한 시간을 입력해 주세요");
      return;
    }

    setDataList({
      ...data,
      [nextId]: {
        id: String(nextId),
        name,
        place,
        date,
        startHour,
        startMin,
        endHour,
        endMin,
      },
    });

    setName("");
    setPlace("");
    setDate("1");
    setSH("08");
    setSM("00");
    setEH("08");
    setEM("00");
    setNextId();
  };

  return (
    <div className="App">
      <div className={style.time_line_wrapper}>
        <InputButton
          name={name}
          place={place}
          date={date}
          onChangeTimeSH={onChangeTimeSH}
          onChangeTimeSM={onChangeTimeSM}
          onChangeTimeEH={onChangeTimeEH}
          onChangeTimeEM={onChangeTimeEM}
          onChangeName={onChangeName}
          onChangePlace={onChangePlace}
          onClickDate={onClickDate}
          handleSubmit={handleSubmit}
        />
        <div className={style.schedule_list_wrapper}>
          <ScheduleList data={data} />
          <TimeLine />
        </div>
      </div>
    </div>
  );
};

export default App;
