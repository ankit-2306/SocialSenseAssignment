'use client';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Face6TwoToneIcon from '@mui/icons-material/Face6TwoTone';

export default function SelectSmall() {
  const [Manager, setManager] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setManager(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1,marginLeft:3, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small-label">Manager</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={Manager}
        label="Manager"
        onChange={handleChange}
      >
        <MenuItem value={"Kirk Mitrohin"} ><Face6TwoToneIcon sx={{marginRight:3}}/> Kirk Mitrohin</MenuItem>
        <MenuItem value={"Jerry Wright"}><Face6TwoToneIcon sx={{marginRight:3}}/> Jerry Wright</MenuItem>
        
      </Select>
    </FormControl>
  );
}
