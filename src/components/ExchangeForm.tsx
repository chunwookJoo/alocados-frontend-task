import { useState } from "react";
import Input from "./element/Input";
import Select from "./element/Select";

const ExchangeForm = () => {
  const [fromCount, setFromCount] = useState("");
  const [fromSelect, setFromSelect] = useState("");
  const [toCount, setToCount] = useState("");
  const [toSelect, setToSelect] = useState("");

  console.log(fromCount, toCount);
  console.log(fromSelect, toSelect);

  return (
    <div>
      <Input
        inputType="string"
        inputId="fromCount"
        labelText="전환 수량 (FROM)"
        setInputData={setFromCount}
      />
      <Select selectState={[fromSelect, setFromSelect]} />
      <Input
        inputType="string"
        inputId="toCount"
        labelText="전환 수량 (TO)"
        readOnly={true}
        inputData={parseInt(fromCount) * 2}
      />
      <Select selectState={[toSelect, setToSelect]} />
    </div>
  );
};

export default ExchangeForm;
