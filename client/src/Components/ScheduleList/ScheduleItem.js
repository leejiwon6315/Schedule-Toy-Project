import { daysData, colorCode } from "../dataBundle";
import style from "./ScheduleStyle.module.scss";

const ScheduleItem = ({ id, name, place, ...schedule }) => {
  const { date, startHour, startMin, endHour, endMin } = schedule;
  const datePosition = 84 + 96 * (date - 1);
  const scheduleTime = (endHour - startHour) * 60 + (endMin - startMin);
  const timeStart = 43 + 72 * (startHour - 8) + (startMin - 0) * 1.2;
  const timeHeight = scheduleTime * 1.2 - 12;
  const color = id % 6;

  return (
    <div
      className={style.schedule_item_wrapper}
      style={{
        left: `${datePosition}px`,
        top: `${timeStart}px`,
        height: `${timeHeight}px`,
        backgroundColor: `#${colorCode[color]}`,
      }}
    >
      <div className={style.schedule_item_contents}>
        <div className={style.schedule_name}>{name}</div>
        <div className={style.schedule_place}>{place}</div>
        <div className={style.schedule_date}>
          {<div>{daysData[date - 1].name}요일</div>}
        </div>
        <div className={style.schedule_time}>
          {startHour}:{startMin} ~ {endHour}:{endMin}
        </div>
      </div>
    </div>
  );
};

export default ScheduleItem;
