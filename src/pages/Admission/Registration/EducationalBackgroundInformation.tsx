import React from 'react'
import { Grid, TextField} from '@mui/material'
import { RegistrationProps } from './Interface'

function EducationalBackgroundInformation(props:RegistrationProps) {
    const { listData, handelChange, draft } = props

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; // Pakai optional chaining
    
        if (file) {
          console.log('logThis, Nama file:', file.name);
          console.log('logThis, Tipe file:', file.type);
          console.log('logThis, Ukuran file:', file.size);
        } else {
          console.log('logThis, Tidak ada file dipilih.');
        }
      };

  return (
    <div className='border radius-lg flex flex-col gap-2'>
        <div className='text-sm font-semibold border radius-lg p-3'>Educational background information</div>
        <Grid container spacing={2} size={12} style={{ padding: 12 }}>
            <Grid size={6}>
                <TextField fullWidth name='schoolname' id="schoolname" label="School name" variant="outlined" onBlur={handelChange}/>
            </Grid>
            <Grid size={3}>
                <TextField fullWidth name='school_city_regency' id="city_regency" label="City/Regency" variant="outlined" onBlur={handelChange}/>
            </Grid>
            <Grid size={3}>
                <TextField fullWidth name='graduation_year' id="graduation_year" label="Graduation year" variant="outlined" onBlur={handelChange}/>
            </Grid>
            <Grid size={12}>
            <div className="dropzone">
                <div>
                    <input type="file" id="file-upload" className='border-dashed border-4 border-biru-light rounded-lg px-80 py-12' style={{width:'100%', alignContent:'center'}} onChange={handleFileChange}/>
                </div>
            </div>
            </Grid>
        </Grid>
    </div>
  )
}

export default EducationalBackgroundInformation