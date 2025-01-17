import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import MuiInput from "@mui/material/Input";
import VolumeUp from "@mui/icons-material/VolumeUp";

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider() {
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value === "" ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Box sx={{ width: 250 }}>
      <Typography id="input-slider" className="mb-2 mt-5" gutterBottom>
        Current Status
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <div className="p-1 rounded  bg-lime-100">Onboarding</div>
        </Grid>
        {/* <div> */}
          <Grid item xs>
            <Slider
              value={typeof value === "number" ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
        {/* </div> */}

        <Grid item>
          <Input
            value={`${value}%`}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
