import TimeLineGrid from "./TimeLineGrid";
import { daysData, hourData } from "../../dataBundle";
import style from "./TimeLineStyle.module.scss";

const TimeLine = () => {
  return (
    <div className={style.table_wrapper}>
      <table className={style.table_header}>
        <tbody>
          <tr>
            <th></th>
            {daysData.map((data) => (
              <td className={style.day} key={data.val}>
                {data.name}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <table className={style.table_body}>
        <tbody>
          <tr>
            <th className={style.times}>
              {hourData.map((data) => (
                <div className={style.time} key={data}>
                  {data}시
                </div>
              ))}
            </th>

            {daysData.map((days) => (
              <TimeLineGrid key={days.val} />
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TimeLine;
