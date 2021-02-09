import { useCallback, useRef, useState } from "react";
import InputButton from "./Components/Input/InputButton";
import ScheduleList from "./Components/ScheduleList";
import TimeLine from "./Components/TimeLine";
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

  const removeData = useCallback(
    (index, id) => {
      setAllData(
        allData
          .map((elem) =>
            elem.id === id
              ? {
                  ...elem,
                  schedule: elem.schedule.filter(
                    (scheduleItem) => scheduleItem.index !== index
                  ),
                }
              : elem
          )
          .filter((elem) => elem.schedule.length > 0)
      );
    },
    [allData]
  );
  return (
    <div className="App">
      <div className={style.time_line_wrapper}>
        <InputButton addData={addData} allData={allData} />
        <div className={style.schedule_list_wrapper}>
          {allData.length >= 1 ? (
            <ScheduleList allData={allData} removeData={removeData} />
          ) : null}
          <TimeLine />
        </div>
      </div>
    </div>
  );
};

export default App;
