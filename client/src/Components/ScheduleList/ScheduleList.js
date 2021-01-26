import ScheduleItem from "./ScheduleItem";
import style from "./ScheduleStyle.module.scss";

const ScheduleList = ({ allData, removeData }) => {
  return (
    <div className={style.schedule_list}>
      {allData.map((item) =>
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
      )}
    </div>
  );
};

export default ScheduleList;
