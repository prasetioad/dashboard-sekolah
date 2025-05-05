// components/CustomDatePicker.tsx
import * as React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

interface CustomDatePickerProps {
  label?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  disableFuture?: boolean;
  disablePast?: boolean;
  minDate?: Date;
  maxDate?: Date;
  fullWidth?: boolean;
  name?:string;
  size?:any
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({
  label = 'Select Date',
  value,
  onChange,
  disableFuture = false,
  disablePast = false,
  minDate,
  maxDate,
  fullWidth = true,
  name,
  size='small'
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        name={name}
        label={label}
        value={value}
        onChange={onChange}
        disableFuture={disableFuture}
        disablePast={disablePast}
        minDate={minDate}
        maxDate={maxDate}
        slotProps={{
          textField: { 
            fullWidth,
            size: size
          }
        }}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
