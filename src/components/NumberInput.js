import { useState } from "react";

export const NumberInput = ({ defaultValue, minimumValue, callback }) => {
  const [value, setValue] = useState(defaultValue);

  const onChange = ({ target }) => {
    const number = target.value.replace(/\D/g, "");
    setValue(number);
  };

  const onBlur = ({ target }) => {
    const number = Number(target.value.replace(/\D/g, ""));
    if (number < minimumValue) {
      setValue(minimumValue);
      callback(minimumValue);
    } else {
      setValue(number);
      callback(number);
    }
  };

  return (
    <input type="text" value={value} onChange={onChange} onBlur={onBlur} />
  );
};
