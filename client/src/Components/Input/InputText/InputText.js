import style from "../InputBoxStyle.module.scss";

const InputText = ({ input, onChangeTxt }) => {
  return (
    <>
      <input
        className={style.input_content}
        type="text"
        name="name"
        value={input.name}
        onChange={onChangeTxt}
        placeholder="일정 / 과목명 (필수입력)"
      />
      <input
        className={style.input_content}
        type="text"
        name="place"
        value={input.place}
        onChange={onChangeTxt}
        placeholder="교수명 / 강의실"
      />
    </>
  );
};

export default InputText;
