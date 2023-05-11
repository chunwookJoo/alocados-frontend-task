import { InputPropsType } from "../../types/input";

const Input = ({
  inputType,
  inputId,
  labelText,
  readOnly,
  inputData,
  setInputData,
}: InputPropsType) => {
  return (
    <>
      <label htmlFor={inputId}>{labelText}</label>
      <input
        type={inputType}
        id={inputId}
        readOnly={readOnly}
        value={inputData}
        onChange={(e) => setInputData && setInputData(e.target.value)}
      />
    </>
  );
};

export default Input;
