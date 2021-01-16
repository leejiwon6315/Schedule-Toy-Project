import ScheduleItem from "./ScheduleItem";
import style from "./ScheduleStyle.module.scss";

const ScheduleList = ({ data }) => {
  return (
    <div className={style.schedule_list}>
      {Object.values(data).map((item) => {
        return <ScheduleItem {...item} key={item.id} />;
      })}
    </div>
  );
};

export default ScheduleList;
