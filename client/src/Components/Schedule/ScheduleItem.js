import React from "react";
import style from "./ScheduleStyle.module.scss";

const ScheduleItem = ({ name, place, ...schedule }) => {
  const result = schedule.date;
  const datePosition = 84 + 96 * (result - 1);
  const scheduleTime =
    (schedule.endHour - schedule.startHour) * 60 +
    (schedule.endMin - schedule.startMin);
  const timeStart =
    43 + 72 * (schedule.startHour - 8) + (schedule.startMin - 0) * 1.2;
  const timeHeight = scheduleTime * 1.2 - 12;

  return (
    <div
      className={style.schedule_item_wrapper}
      style={{
        left: `${datePosition}px`,
        top: `${timeStart}px`,
        height: `${timeHeight}px`,
      }}
    >
      <div className={style.schedule_item_contents}>
        <div className={style.schedule_name}>{name}</div>
        <div className={style.schedule_place}>{place}</div>
        <div className={style.schedule_date}>
          {(() => {
            switch (result) {
              case 1:
                return <div>월요일</div>;
              case 2:
                return <div>화요일</div>;
              case 3:
                return <div>수요일</div>;
              case 4:
                return <div>목요일</div>;
              case 5:
                return <div>금요일</div>;
              case 6:
                return <div>토요일</div>;
              default:
                return <div>월요일</div>;
            }
          })()}
        </div>
        <div className={style.schedule_time}>
          {schedule.startHour}:{schedule.startMin} ~ {schedule.endHour}:
          {schedule.endMin}
        </div>
      </div>
    </div>
  );
};

export default ScheduleItem;
