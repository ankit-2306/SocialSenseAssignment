'use client';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Face6TwoToneIcon from '@mui/icons-material/Face6TwoTone';

export default function SelectSmall() {
  const [Lead, setLead] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setLead(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1,marginLeft:3, minWidth: 200 }} size="small">
      <InputLabel id="demo-select-small-label">Lead</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={Lead}
        label="Lead"
        onChange={handleChange}
      >
import Face6TwoToneIcon from '@mui/icons-material/Face6TwoTone';
        <MenuItem value={"Eugene Humell"}><Face6TwoToneIcon sx={{marginRight:3}}/>Eugene Humell</MenuItem>
        <MenuItem value={"Arthur"}><Face6TwoToneIcon sx={{marginRight:3}}/>Arthur</MenuItem>
        
      </Select>
    </FormControl>
  );
}
