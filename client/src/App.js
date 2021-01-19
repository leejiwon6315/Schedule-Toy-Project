import { useState } from "react";
import InputButton from "./Components/Input/InputButton";
import ScheduleList from "./Components/Schedule/ScheduleList";
import TimeLine from "./Components/TimeLine/TimeLine";
import { nextId, setNextId } from "./dataBundle";
import style from "./App.module.scss";

const App = () => {
  const [allData, setAllData] = useState([]);

  const addData = (elem) => {
    setAllData(
      allData.concat({
        ...elem,
        id: String(nextId),
      })
    );

    setNextId();
  };

  return (
    <div className="App">
      <div className={style.time_line_wrapper}>
        <InputButton addData={addData} />
        <div className={style.schedule_list_wrapper}>
          <ScheduleList data={allData} />
          <TimeLine />
        </div>
      </div>
    </div>
  );
};

export default App;
