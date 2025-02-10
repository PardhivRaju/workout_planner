import React, { useState } from "react";
import { LightText } from "../customTypo/CustomTypo.jsx";

const NumberField = ({ min = 0, max = 100, step = 1, initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleIncrement = () => {
    if (value + step <= max) {
      setValue(value + step);
      onChange(value + step);
    }
  };

  const handleDecrement = () => {
    if (value - step >= min) {
      setValue(value - step);
      onChange(value - step);
    }
  };

  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    if (newValue >= min && newValue <= max) {
      setValue(newValue);
      onChange(newValue);
    }
  };

  return (
    <div style={styles.container}>
      <button onClick={handleDecrement} style={styles.button}>-</button>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        style={styles.input}
      />
      <button onClick={handleIncrement} style={styles.button}>+</button>
    </div>
  );
};

const styles = {
  container: { display: "flex", alignItems: "center" },
  button: { padding: "5px 10px", fontSize: "16px", cursor: "pointer" },
  input: { width: "60px", textAlign: "center", fontSize: "16px", padding: "5px", borderRadius: "4px", border: "1px solid #ccc", margin: "0 5px" }
};

export default NumberField;

export const EditSetsAndReps = ({ label, initialValue, onChange }) => (
  <div style={{ display: "flex", margin: "5px", justifyContent: "space-between", paddingLeft: "4vw", paddingRight: "4vw" }}>
    <LightText sx={{ color: "black", fontSize: "18px" }}>{label}</LightText>
    <NumberField min={0} max={10} step={1} initialValue={initialValue} onChange={onChange} />
  </div>
);
