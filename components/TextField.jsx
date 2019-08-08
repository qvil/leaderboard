import React, { useState } from "react";

const TextField = ({ label, value }) => {
  const [_value, setValue] = useState(value);
  const handleChange = e => {
    setValue(e.target.value);
  };
  return (
    <>
      <label for="text">{label}</label>
      <input name="text" value={_value} onChange={handleChange} />
    </>
  );
};

export default TextField;
