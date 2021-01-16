import React from "react";
import style from "./ScheduleStyle.module.scss";

const ScheduleItem = ({
  name,
  place,
  date,
  onClick,
  startHour,
  startMin,
  endHour,
  endMin,
}) => {
  return (
    <div className={style.schedule_item_wrapper}>
      <div onClick={onClick} className={style.close_button}>
        ×
      </div>
      <div className={style.schedule_item_list}>
        <div className={style.schedule_name}>{name}</div>
        <div className={style.schedule_place}>{place}</div>
        <div className={style.schedule_date}></div>
        <div className={style.schedule_time}>
          {startHour}:{startMin} ~ {endHour}:{endMin}
        </div>
      </div>
    </div>
  );
};

export default ScheduleItem;
