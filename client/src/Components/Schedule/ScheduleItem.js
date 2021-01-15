import React from "react";
import style from "ScheduleStyle.module.scss";

const ScheduleItem = ({
  id,
  name,
  place,
  onClick,
  startHour,
  startMin,
  endHour,
  endMin,
}) => {
  return (
    <div className={style.schedule_wrapper}>
      <div onClick={onClick} className={style.close_button}>
        ×
      </div>
      <div className={style.schedule_name}>{name}</div>
      <div className={style.schedule_place}>{place}</div>
      <div className={style.schedule_time}>
        {startHour}:{startMin} ~ {endHour}:{endMin}
      </div>
    </div>
  );
};

export default ScheduleItem;
