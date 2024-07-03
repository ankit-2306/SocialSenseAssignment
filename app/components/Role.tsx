'use client';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectSmall() {
  const [Role, setRole] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1,marginLeft:3, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small-label">Role</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={Role}
        label="Role"
        onChange={handleChange}
      >
        <MenuItem value={"Employee"}>Emoployee</MenuItem>
        <MenuItem value={"Employer"}>Employer</MenuItem>
        
      </Select>
    </FormControl>
  );
}
