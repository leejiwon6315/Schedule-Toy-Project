import { useState } from "react";
import style from "./InputBoxStyle.module.scss";

const InputDayList = ({ name, val }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (!clicked) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <li
      className={style.listLi}
      value={val}
      onClick={handleClick}
      style={{
        backgroundColor: clicked
          ? "rgb(93, 185, 170)"
          : "rgba(48, 48, 48, 0.26)",
        color: clicked ? "white" : "rgba(5, 5, 5, 0.5)",
      }}
    >
      {name}
    </li>
  );
};

export default InputDayList;
