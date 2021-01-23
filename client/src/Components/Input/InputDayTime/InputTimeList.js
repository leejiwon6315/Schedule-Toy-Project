import { hourData, minData } from "../../dataBundle";
import style from "../InputBoxStyle.module.scss";

const InputTimeList = ({ handleChange, schedule }) => {
  const { startHour, startMin, endHour, endMin } = schedule;
  return (
    <div className={style.select_wrapper}>
      <select name="startHour" value={startHour} onChange={handleChange}>
        {hourData.map((data) => (
          <option value={data} key={data}>
            {data < 10 ? `0${data}` : data}시
          </option>
        ))}
      </select>

      <select name="startMin" value={startMin} onChange={handleChange}>
        {minData.map((data) => (
          <option value={data} key={data}>
            {data < 10 ? `0${data}` : data}분
          </option>
        ))}
      </select>
      <h4>~</h4>
      <select name="endHour" value={endHour} onChange={handleChange}>
        {hourData.map((data) => (
          <option value={data} key={data}>
            {data < 10 ? `0${data}` : data}시
          </option>
        ))}
      </select>

      <select name="endMin" value={endMin} onChange={handleChange}>
        {minData.map((data) => (
          <option value={data} key={data}>
            {data < 10 ? `0${data}` : data}분
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputTimeList;
