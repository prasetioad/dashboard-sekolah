import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

type selectProps = {
    name:any;
    label: string;
    master: any[];
    draft: any;
    onChange: (e: string) => void
}

export default function SelectSmall(props: selectProps) {
    const {name, label, master, draft, onChange} = props

    const handleChange = (event: any) => {
        onChange(event);
    };

    return (
        <div>
            <FormControl sx={{minWidth: 120 }} fullWidth>
                <InputLabel id="demo-simple-select-autowidth-label">{label}</InputLabel>
                <Select
                    labelId="demo-simple-select-autowidth-label"
                    id={name}
                    value={draft.guardian}
                    label={label}
                    onBlur={handleChange}
                    variant='outlined'
                    name={name}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {master.map(item =>
                        <MenuItem value={item}>{item}</MenuItem>
                    )}
                </Select>
            </FormControl>
        </div>
    );
}
