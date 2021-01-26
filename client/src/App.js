import { useCallback, useRef, useState, useEffect } from "react";
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

  const removeData = useCallback(
    (index, id) => {
      setAllData(
        allData.map((elem) =>
          elem.id === id
            ? elem.schedule.length >= 1
              ? {
                  ...elem,
                  schedule: elem.schedule.filter(
                    (scheduleItem) => scheduleItem.index !== index
                  ),
                }
              : {}
            : elem
        )
      );
    },
    [allData]
  );

  useEffect(() => {
    if (allData.length === 1 && allData[0].schedule.length === 0) {
      setAllData([]);
    }
  }, [allData]);

  return (
    <div className="App">
      <div className={style.time_line_wrapper}>
        <InputButton addData={addData} allData={allData} />
        <div className={style.schedule_list_wrapper}>
          <ScheduleList data={allData} removeData={removeData} />
          <TimeLine />
        </div>
      </div>
    </div>
  );
};

export default App;
