import React, { ReactEventHandler } from "react";
import { FromInputPropsType } from "../../types/input";
import { getFormatDigits } from "../../utils/format";
import { FormBackground, InputStyle } from "../../styles/Form";
import { FlexCol } from "../../styles/Flex";

const FromInput = ({
  inputType,
  inputId,
  labelText,
  placeholder,
  inputState,
}: FromInputPropsType) => {
  const [inputData, setInputData] = inputState;

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInputData(Number(value));
    // const inputCheck = /^[0-9.]/.test(value);
    // if (inputCheck) {
    //   setInputData(value);
    // }
  };
  return (
    <FormBackground style={{ flex: 1, padding: "6px" }}>
      <FlexCol>
        <label style={{ fontSize: "12px" }} htmlFor={inputId}>
          {labelText}
        </label>
        <InputStyle
          type={inputType}
          id={inputId}
          placeholder={placeholder}
          onChange={(e) => onChangeInput(e)}
          value={Number(inputData)}
        />
      </FlexCol>
    </FormBackground>
  );
};

export default FromInput;
