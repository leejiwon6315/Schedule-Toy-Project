import style from "./InputBoxStyle.module.scss";
import { hourData, minData } from "../../dataBundle";

const InputTimeList = ({
  onChangeTimeSH,
  onChangeTimeSM,
  onChangeTimeEH,
  onChangeTimeEM,
  startHour,
  startMin,
  endHour,
  endMin,
}) => {
  return (
    <div className={style.select_wrapper}>
      <select name="startHour" value={startHour} onChange={onChangeTimeSH}>
        {hourData.map((data) => (
          <option value={data} key={data}>
            {data}시
          </option>
        ))}
      </select>

      <select name="startMin" value={startMin} onChange={onChangeTimeSM}>
        {minData.map((data) => (
          <option value={data} key={data}>
            {data}분
          </option>
        ))}
      </select>
      <h4>~</h4>
      <select name="endHour" value={endHour} onChange={onChangeTimeEH}>
        {hourData.map((data) => (
          <option value={data} key={data}>
            {data}시
          </option>
        ))}
      </select>

      <select name="endMin" value={endMin} onChange={onChangeTimeEM}>
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
