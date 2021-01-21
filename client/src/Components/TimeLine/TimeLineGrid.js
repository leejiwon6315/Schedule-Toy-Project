import { allTimeData } from "../dataBundle";
import style from "./TimeLineStyle.module.scss";

const TimeLineGrid = () => {
  return (
    <td>
      <div className={style.cols}>
        <div className={style.grids}>
          {allTimeData.map((data) => (
            <div className={style.grid} key={data}></div>
          ))}
        </div>
      </div>
    </td>
  );
};

export default TimeLineGrid;
