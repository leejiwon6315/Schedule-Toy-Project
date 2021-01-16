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
        <div className={style.schedule_date}>
          {(() => {
            switch (date) {
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
          {startHour}:{startMin} ~ {endHour}:{endMin}
        </div>
      </div>
    </div>
  );
};

export default ScheduleItem;
