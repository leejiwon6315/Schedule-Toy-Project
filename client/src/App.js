import style from "./App.module.scss";
import { useState } from "react";
import InputButton from "./Components/Input/InputButton";
import ScheduleList from "./Components/Schedule/ScheduleList";
import TimeLine from "./Components/TimeLine/TimeLine";
import { nextId, virtualData, handleNextId } from "./virtualData";
import useInput from "./Hook/useInput";
import useSelect from "./Hook/useSelect";

const App = () => {
  const [data, setDataList] = useState(virtualData);
  const [name, setName, onChangeName] = useInput("");
  const [place, setPlace, onChangePlace] = useInput("");
  const [date, setDate, onClickDate] = useSelect("1");

  // const addSchedule = () => {
  //   const url = "/api/schedule-data";
  //   const formData = new FormData();

  //   formData.append("name", name);
  //   formData.append("place", place);

  //   const config = {
  //     headers: {
  //       "content-type": "multipart/form-data",
  //     },
  //   };

  //   return postMessage(url, formData, config);
  // };

  const handleSubmit = () => {
    if (name === "") {
      alert("일정(과목명)을 입력해 주세요");
      return;
    }

    // addSchedule().then((response) => {
    //   console.log(response.data);
    // });

    setDataList({
      ...data,
      [nextId]: {
        id: String(nextId),
        name,
        place,
        date,
      },
    });

    setName("");
    setPlace("");
    setDate("1");
    handleNextId();
  };

  return (
    <div className="App">
      <div className={style.time_line_wrapper}>
        <InputButton
          name={name}
          place={place}
          date={date}
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
