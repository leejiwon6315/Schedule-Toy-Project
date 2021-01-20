import { useCallback, useRef, useState } from "react";
import InputButton from "./Components/Input/InputButton";
import ScheduleList from "./Components/ScheduleList/ScheduleList";
import TimeLine from "./Components/TimeLine/TimeLine";
import style from "./App.module.scss";

const App = () => {
  const [allData, setAllData] = useState([]);
  const nextId = useRef(1);

  const addData = useCallback((elem) => {
    setAllData((allData) =>
      allData.concat({
        ...elem,
        id: nextId.current,
      })
    );
    nextId.current += 1;
  }, []);

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
