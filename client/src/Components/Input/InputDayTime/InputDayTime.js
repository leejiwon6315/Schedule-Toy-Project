import InputDayList from "./InputDayList";
import InputTimeList from "./InputTimeList";
import { daysData } from "../../../dataBundle";
import style from "../InputBoxStyle.module.scss";
import { useCallback, useState } from "react";

const InputDayTime = ({ index, onChange }) => {
  const [daysDataArray, setArrayData] = useState(daysData);
  const [formData, setFormData] = useState({
    date: 1,
    startHour: "08",
    startMin: "00",
    endHour: "08",
    endMin: "00",
  });

  const handleClick = useCallback(
    (e) => {
      setFormData({
        ...formData,
        date: e.target.value,
      });

      onChange(index, formData);
    },
    [index, formData, onChange]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    onChange(index, formData);
    console.log("InputDayTime", formData);
  };

  // const handleChange = useCallback(
  //   (e) => {
  //     const { name, value } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });

  //     onChange(index, formData);
  //   },
  //   [index, formData, onChange]
  // );

  const handleToggle = useCallback((id) => {
    setArrayData((daysInfo) =>
      daysInfo.map((data) =>
        data.id === id
          ? { ...data, checked: true }
          : { ...data, checked: false }
      )
    );
  }, []);

  return (
    <>
      <ol className={style.day_check_wrapper} onClick={handleClick}>
        {daysDataArray.map((data) => (
          <InputDayList data={data} onClick={handleToggle} key={data.id} />
        ))}
      </ol>

      <InputTimeList formData={formData} onChange={handleChange} />
    </>
  );
};

export default InputDayTime;
