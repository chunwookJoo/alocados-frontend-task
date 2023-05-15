import { FlexCol } from "../../styles/Flex";
import { FormBackground, InputStyle } from "../../styles/Form";
import { ToInputPropsType } from "../../types/input";

const ToInput = ({
  inputType,
  inputId,
  labelText,
  readOnly,
  inputData,
}: ToInputPropsType) => {
  return (
    <FormBackground style={{ flex: 1, padding: "6px" }}>
      <FlexCol>
        <label style={{ fontSize: "12px" }} htmlFor={inputId}>
          {labelText}
        </label>
        <InputStyle
          type={inputType}
          id={inputId}
          readOnly={readOnly}
          value={inputData}
        />
      </FlexCol>
    </FormBackground>
  );
};

export default ToInput;
