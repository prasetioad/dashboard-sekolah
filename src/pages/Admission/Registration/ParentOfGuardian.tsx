import React from 'react'
import { Grid, TextField, Box, Typography, Radio } from '@mui/material'
import SelectSmall from './DropDownMenu'
import { RegistrationProps } from './Interface'
import CustomDatePicker from '@/hooks/CustomDatePicker'

function ParentOfGuardian(props: RegistrationProps) {
    const { listData, handelChange, draft } = props
    return (
        <div className='border radius-lg flex flex-col gap-2'>
            <div className='flex justify-between  border radius-lg p-3 items-center'>
                <div className='text-md font-semibold'>Parent or guardian information</div>
                <div className='flex gap-1 items-center'>
                    <img src="/icons/plus.svg" alt="add" />
                    <div className='text-xs font-semibold text-blue-dark'>Add New</div>
                </div>
            </div>
            <Grid container spacing={2} size={12} style={{ padding: 12 }}>
                <Grid size={3}>
                    <SelectSmall name='guardian_name' label='Who(Father/Mother/Other)' master={listData} onChange={handelChange} draft={draft} />
                </Grid>
                <Grid size={3}>
                    <TextField fullWidth name='guardian_fullname' id="guardian_fullname" label="Full name" variant="outlined" onBlur={handelChange}/>
                </Grid>
                <Grid size={3}>
                    <CustomDatePicker 
                        name='guardian_date_of_birth'
                        label="Date of birth"
                        value={draft.guardian_date_of_birth}
                        onChange={(date) => handelChange(date)}
                        size='medium'
                        disableFuture
                    />
                </Grid>
                <Grid size={3}>
                    <TextField fullWidth name='guardian_place_of_birth' id="guardian_place_of_birth" label="Place of birth" variant="outlined" onBlur={handelChange}/>
                </Grid>
                <Grid size={6} container spacing={0}>
                    <Grid size={4} >
                        <div className='border radius-lg p-4'>Gender</div>
                    </Grid>
                    <Grid size={4} >
                        <div className="border radius-lg p-2 flex justify-center items-center gap-1">
                            <div>
                                <Radio
                                    checked={draft.guardian_gender === 'Man'}
                                    onChange={handelChange}
                                    value="Man"
                                    name="guardian_gender"
                                />
                            </div>
                            <div className="bg-blue-light p-1 rounded radius-lg">
                                <img src="/icons/Man.svg" alt="Man" />
                            </div>
                            <div>Man</div>
                        </div>
                    </Grid>
                    <Grid size={4} >
                        <div className='border radius-lg p-2 flex justify-center items-center gap-1' >
                            <div>
                                <Radio
                                    checked={draft.guardian_gender === 'Woman'}
                                    onChange={handelChange}
                                    value="Woman"
                                    name="guardian_gender"
                                />
                            </div>
                            <div className="bg-pink p-1 rounded radius-lg">
                                <img src="/icons/Woman.svg" alt="Woman"/>
                            </div>
                            <div>Woman</div>
                        </div>
                    </Grid>
                </Grid>
                <Grid size={6}>
                    <TextField fullWidth name='guardian_placephone_number' id="placephone_number" label="Phone number" variant="outlined" onBlur={handelChange}/>
                </Grid>
                <Grid size={12}>
                    <TextField fullWidth name='guardian_address' id="address" label="Address" variant="outlined" onBlur={handelChange}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default ParentOfGuardian