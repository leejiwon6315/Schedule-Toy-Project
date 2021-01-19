import style from "../InputBoxStyle.module.scss";

const InputDayList = ({ data, onClick }) => {
  const { name, id, checked } = data;

  const handleOnOff = () => {
    onClick(id);
  };

  return (
    <li
      className={style.day_check}
      style={{
        backgroundColor: checked ? "rgb(93, 185, 170)" : null,
        color: checked ? "white" : null,
      }}
      onClick={handleOnOff}
      value={id}
    >
      {name}
    </li>
  );
};

export default InputDayList;
