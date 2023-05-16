export type FromInputPropsType = {
  inputType: string;
  inputId: string;
  labelText: string;
  placeholder: string;
  inputState: [string, React.Dispatch<React.SetStateAction<string>>];
};

export type ToInputPropsType = {
  inputType: string;
  inputId: string;
  labelText: string;
  readOnly: boolean;
  inputData: string | number;
};
