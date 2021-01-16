import style from "./InputBoxStyle.module.scss";
import InputDayList from "./InputDayList";
import { daysData, hourData, minData } from "../../dataBundle";

const InputBox = ({
  modalState,
  closeModal,
  name,
  place,
  date,
  startHour,
  startMin,
  endHour,
  endMin,
  onClickDate,
  onChangeTimeSH,
  onChangeTimeSM,
  onChangeTimeEH,
  onChangeTimeEM,
  onChangeName,
  onChangePlace,
  onSubmit,
}) => {
  return (
    <>
      {modalState ? (
        <div className={style.input_wrapper}>
          <button className={style.close_button} onClick={closeModal}>
            ×
          </button>

          <div className={style.input_wrapper_sub}>
            <div className={style.input_title}>
              <h3>일정</h3>
              <h3>추가 정보</h3>
              <h3>날짜/시간</h3>
            </div>

            <div className={style.input_body}>
              <input
                className={style.input_content}
                type="text"
                name="name"
                value={name}
                onChange={onChangeName}
                placeholder="일정 / 과목명 (필수입력)"
              />
              <input
                className={style.input_content}
                type="text"
                name="place"
                value={place}
                onChange={onChangePlace}
                placeholder="교수명 / 강의실"
              />

              <ol className={style.listOl} onClick={onClickDate} value={date}>
                {daysData.map((data) => (
                  <InputDayList
                    name={data.name}
                    val={data.val}
                    key={data.val}
                  />
                ))}
              </ol>

              <div className={style.select_wrapper}>
                <select
                  name="startHour"
                  value={startHour}
                  onChange={onChangeTimeSH}
                >
                  {hourData.map((data) => (
                    <option value={data} key={data}>
                      {data}시
                    </option>
                  ))}
                </select>

                <select
                  name="startMin"
                  value={startMin}
                  onChange={onChangeTimeSM}
                >
                  {minData.map((data) => (
                    <option value={data} key={data}>
                      {data}분
                    </option>
                  ))}
                </select>
                <h4>~</h4>
                <select
                  name="endHour"
                  value={endHour}
                  onChange={onChangeTimeEH}
                >
                  {hourData.map((data) => (
                    <option value={data} key={data}>
                      {data}시
                    </option>
                  ))}
                </select>

                <select name="endMin" value={endMin} onChange={onChangeTimeEM}>
                  {minData.map((data) => (
                    <option value={data} key={data}>
                      {data}분
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <button className={style.input_box_button} onClick={onSubmit}>
            추가하기
          </button>
        </div>
      ) : null}
    </>
  );
};

export default InputBox;
