import { useCallback, useRef, useState } from "react";
import InputButton from "./Components/Input/InputButton";
import ScheduleList from "./Components/ScheduleList/ScheduleList";
import TimeLine from "./Components/TimeLine/TimeLine";
import style from "./App.module.scss";

const App = () => {
  const [allData, setAllData] = useState([]);
  const nextId = useRef(1);
  const [contextState, setContextState] = useState(true);

  const addData = useCallback((elem) => {
    setAllData((allData) =>
      allData.concat({
        ...elem,
        id: nextId.current,
      })
    );
    nextId.current += 1;
  }, []);

  const mouseLeftClick = useCallback(() => {
    if (contextState) {
      setContextState(false);
    }
  }, [contextState]);

  return (
    <div className="App" onClick={mouseLeftClick}>
      <div className={style.time_line_wrapper}>
        <InputButton addData={addData} allData={allData} />
        <div className={style.schedule_list_wrapper}>
          <ScheduleList
            data={allData}
            contextState={contextState}
            setContextState={setContextState}
          />
          <TimeLine />
        </div>
      </div>
    </div>
  );
};

export default App;
