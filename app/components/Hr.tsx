'use client';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Face6TwoToneIcon from '@mui/icons-material/Face6TwoTone';


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
       <MenuItem value={"Kate Middleton"}><Face6TwoToneIcon sx={{marginRight:3}}/>Kate Middleton</MenuItem>
        <MenuItem value={"Arthur"}><Face6TwoToneIcon sx={{marginRight:3}}/>Arthur</MenuItem>
        
      </Select>
    </FormControl>
  );
}
