import React, { useState } from "react";
import { FromInputPropsType } from "../../types/input";
import { FormBackground, InputStyle } from "../../styles/Form";
import { FlexCol } from "../../styles/Flex";
import { CHECK_ZERO_REGEX, INPUT_REGEX } from "../../utils/constants/regex";

const FromInput = ({
  inputType,
  inputId,
  labelText,
  placeholder,
  inputState,
}: FromInputPropsType) => {
  const [inputData, setInputData] = inputState;
  const [warning, setWarning] = useState(false);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const inputCheck = INPUT_REGEX.test(value);
    const inputCheckZero = CHECK_ZERO_REGEX.test(value);

    if (inputCheck) setInputData(value);
    if (inputCheckZero) {
      setWarning(true);
    } else {
      setWarning(false);
    }
  };
  return (
    <FormBackground
      style={{
        flex: 1,
        padding: "6px",
        border: warning ? "1px solid red" : "",
      }}
    >
      <FlexCol>
        <label style={{ fontSize: "12px" }} htmlFor={inputId}>
          {labelText}
        </label>
        <InputStyle
          type={inputType}
          id={inputId}
          placeholder={placeholder}
          onChange={onChangeInput}
          value={inputData}
        />
      </FlexCol>
    </FormBackground>
  );
};

export default FromInput;
