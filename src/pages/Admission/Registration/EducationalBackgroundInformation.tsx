import React, { useRef, useState } from 'react'
import { Grid, TextField } from '@mui/material'
import { RegistrationProps } from './Interface'
import UploadFile from '@/components/UploadFIle/UploadFile'

function EducationalBackgroundInformation(props: RegistrationProps) {
    const { listData, draft, setDraft } = props

    const handleAddInput= (e:any) => {
       const newInput = {
            id:draft.educational_background.length + 1,
            school_name:'',
            school_city_regency:'',
            graduation_year:'',
            report_card_and_diploma:{}
        }
        setDraft({
            ...draft,
            educational_background : [...draft.educational_background, newInput ]
        })
    }
    const handleChange =(e:any) =>{
        
    }

    const renderHandle = (item:any) => {
        return(
            <Grid container spacing={2} size={12} style={{ padding: 12 }} className={'border radius-lg'}>
                <Grid size={6}>
                    <TextField value={item.school_name} fullWidth name='school_name' id="school_name" label="School name" variant="outlined" onBlur={handleChange} />
                </Grid>
                <Grid size={3}>
                    <TextField value={item.school_city_regency} fullWidth name='school_city_regency' id="city_regency" label="City/Regency" variant="outlined" onBlur={handleChange} />
                </Grid>
                <Grid size={3}>
                    <TextField value={item.graduation_year} fullWidth name='graduation_year' id="graduation_year" label="Graduation year" variant="outlined" onBlur={handleChange} />
                </Grid>
                <Grid size={12}>
                    {item.report_card_and_diploma.lastModified ?
                        <Grid size={12}>
                            <TextField fullWidth value={item.report_card_and_diploma.name} disabled/> 
                        </Grid>:
                        <div className="dropzone">
                            <div>
                                <UploadFile draft={draft} setDraft={handleChange} placeholder='Upload  Report card and Diploma (Max. 10Mb)' />
                            </div>
                        </div>
                    }
                </Grid>
            </Grid>
        )
    }
    return (
        <div className='border radius-lg flex flex-col gap-2'>
            <div className='flex justify-between  border radius-lg p-3 items-center'>
                <div className='text-md font-semibold'>Educational background information</div>
                <div className='flex gap-1 items-center'>
                    <img src="/icons/plus.svg" alt="add" />
                    <div className='text-xs font-semibold text-blue-dark' onClick={handleAddInput}>Add New</div>
                </div>
            </div>
            {draft.educational_background.map((item:any) => renderHandle(item))}
        </div>
    )
}

export default EducationalBackgroundInformation