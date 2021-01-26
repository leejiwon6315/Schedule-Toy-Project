import ScheduleItem from "./ScheduleItem";
import style from "./ScheduleStyle.module.scss";

const ScheduleList = ({ data, removeData }) => {
  return (
    <div className={style.schedule_list}>
      {data.length > 0
        ? data.map((item) =>
            item.schedule.map((scheduleItem) => (
              <ScheduleItem
                id={item.id}
                name={item.name}
                place={item.place}
                {...scheduleItem}
                key={scheduleItem.index}
                removeData={removeData}
              />
            ))
          )
        : null}
    </div>
  );
};

export default ScheduleList;
