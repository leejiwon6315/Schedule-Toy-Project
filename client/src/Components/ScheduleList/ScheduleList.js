import ScheduleItem from "./ScheduleItem";
import style from "./ScheduleStyle.module.scss";

const ScheduleList = ({ data }) => {
  return (
    <div className={style.schedule_list}>
      {data.map((item) =>
        item.schedule.map((schedule) => (
          <ScheduleItem
            id={item.id}
            name={item.name}
            place={item.place}
            {...schedule}
            key={schedule.index}
          />
        ))
      )}
    </div>
  );
};

export default ScheduleList;
