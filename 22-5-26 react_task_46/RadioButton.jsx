import { useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";

function RadioButton() {
  const [gender, setGender] = useState("");

  return (
    <div>
      <h3>Gender</h3>

      <RadioGroup
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <FormControlLabel
          value="Male"
          control={<Radio />}
          label="Male"
        />

        <FormControlLabel
          value="Female"
          control={<Radio />}
          label="Female"
        />
      </RadioGroup>
      <h1>Gender : {gender}</h1>
    </div>
  );
}

export default RadioButton;