import style from "./InputBoxStyle.module.scss";

const InputDayList = ({ name, val }) => {
  return (
    <>
      <input type="radio" className={style.daysList} name="day" value={val} />
      {name}
    </>
  );
};

export default InputDayList;
