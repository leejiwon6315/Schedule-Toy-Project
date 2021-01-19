import style from "./InputBoxStyle.module.scss";
import { hourData, minData } from "../../dataBundle";

const InputTimeList = ({ onChange, startHour, startMin, endHour, endMin }) => {
  return (
    <div className={style.select_wrapper}>
      <select name="startHour" value={startHour} onChange={onChange}>
        {hourData.map((data) => (
          <option value={data} key={data}>
            {data}시
          </option>
        ))}
      </select>

      <select name="startMin" value={startMin} onChange={onChange}>
        {minData.map((data) => (
          <option value={data} key={data}>
            {data}분
          </option>
        ))}
      </select>
      <h4>~</h4>
      <select name="endHour" value={endHour} onChange={onChange}>
        {hourData.map((data) => (
          <option value={data} key={data}>
            {data}시
          </option>
        ))}
      </select>

      <select name="endMin" value={endMin} onChange={onChange}>
        {minData.map((data) => (
          <option value={data} key={data}>
            {data}분
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputTimeList;
