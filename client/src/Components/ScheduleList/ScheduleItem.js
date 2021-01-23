import { daysData, colorCode } from "../dataBundle";
import style from "./ScheduleStyle.module.scss";

const ScheduleItem = ({ id, name, place, ...schedule }) => {
  const { date, startHour, startMin, endHour, endMin } = schedule;
  const datePosition = 84 + 96 * (date - 1);
  const scheduleTime = (endHour - startHour) * 60 + (endMin - startMin);
  const timeStart = 43 + 72 * (startHour - 8) + startMin * 1.2;
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
      <div
        className={style.schedule_item_contents}
        style={timeHeight < 34 ? { lineHeight: "12px" } : null}
      >
        <div
          className={style.schedule_name}
          style={timeHeight < 34 ? { fontSize: "11px" } : null}
        >
          {name.length > 7 ? name.slice(0, 6)`...` : name}
        </div>
        <div className={style.schedule_place}>
          {timeHeight >= 54 ? place : null}
        </div>
        <div className={style.schedule_date}>
          {timeHeight >= 54 ? `${daysData[date - 1].name}요일` : null}
        </div>
        <div
          className={style.schedule_time}
          style={timeHeight < 34 ? { fontSize: "11px" } : null}
        >
          {startHour < 10 ? `0${startHour}` : startHour}:
          {startMin < 10 ? `0${startMin}` : startMin}~
          {endHour < 10 ? `0${endHour}` : endHour}:
          {endMin < 10 ? `0${endMin}` : endMin}
        </div>
      </div>
    </div>
  );
};

export default ScheduleItem;
