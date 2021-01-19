import React from "react";
import style from "./ScheduleStyle.module.scss";

const ScheduleItem = ({ ...data }) => {
  const result = data.date;
  const datePosition = 84 + 96 * (result - 1);
  const scheduleTime =
    (data.endHour - data.startHour) * 60 + (data.endMin - data.startMin);
  const timeStart = 43 + 72 * (data.startHour - 8) + (data.startMin - 0) * 1.2;
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
        <div className={style.schedule_name}>{data.name}</div>
        <div className={style.schedule_place}>{data.place}</div>
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
          {data.startHour}:{data.startMin} ~ {data.endHour}:{data.endMin}
        </div>
      </div>
    </div>
  );
};

export default ScheduleItem;
