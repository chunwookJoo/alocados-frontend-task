export type FromInputPropsType = {
  inputType: string;
  inputId: string;
  labelText: string;
  placeholder: string;
  inputState: [number | null, React.Dispatch<React.SetStateAction<number>>];
};

export type ToInputPropsType = {
  inputType: string;
  inputId: string;
  labelText: string;
  readOnly: boolean;
  inputData: string | number;
};
