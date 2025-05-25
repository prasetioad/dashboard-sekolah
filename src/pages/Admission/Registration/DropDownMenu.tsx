import React from 'react';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
} from '@mui/material';

export interface SelectSmallProps<T extends string | number> {
  name: string;
  label: string;
  master: T[]; // List of options (value & display)
  value: T;
  onChange: (value: T) => void;
}

export default function SelectSmall<T extends string | number>({
  name,
  label,
  master,
  value,
  onChange,
}: SelectSmallProps<T>) {
  const handleChange = (event: SelectChangeEvent<T>) => {
    onChange(event.target.value as T);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} fullWidth>
      <InputLabel id={`label-${name}`}>{label}</InputLabel>
      <Select
        labelId={`label-${name}`}
        id={name}
        value={value}
        label={label}
        onChange={handleChange}
        name={name}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {master.map((item, idx) => (
          <MenuItem key={idx} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
