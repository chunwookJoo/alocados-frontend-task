export type InputPropsType = {
  inputType: string;
  inputId: string;
  labelText: string;
  readOnly?: boolean;
  inputData?: string | number;
  setInputData?: React.Dispatch<React.SetStateAction<string>>;
};
