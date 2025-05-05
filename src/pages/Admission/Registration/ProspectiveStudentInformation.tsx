import React from 'react'
import { Grid, TextField, Box, Typography, Radio } from '@mui/material'
import { RegistrationProps } from './Interface'
import CustomDatePicker from '@/hooks/CustomDatePicker'

function ProspectiveStudentInformation(props:RegistrationProps) {
    const {listData, handelChange, draft } = props

    return (
        <div className='border radius-lg flex flex-col gap-2'>
            <div className='text-sm font-semibold border radius-lg p-3'>Prospective students’ personal information</div>
            <Grid container spacing={2} size={12} style={{ padding: 12 }}>
                <Grid size={6}>
                    <TextField fullWidth name='fullname' id="fullname" label="Full name" variant="outlined" onBlur={handelChange}/>
                </Grid>
                <Grid size={3}>
                    <CustomDatePicker 
                        name='date_of_birth'
                        label="Date of birth"
                        value={draft.date_of_birth}
                        onChange={(date) => handelChange(date)}
                        size='medium'
                        disableFuture
                    />
                    {/* <TextField fullWidth name='date_of_birth' id="date_of_birth" label="Date of birth" variant="outlined" onBlur={handelChange}/> */}
                </Grid>
                <Grid size={3}>
                    <TextField fullWidth name='place_of_birth' id="place_of_birth" label="Place of birth" variant="outlined" onBlur={handelChange}/>
                </Grid>
                <Grid size={6} container spacing={0}>
                    <Grid size={4} >
                        <div className='border radius-lg p-4'>Gender</div>
                    </Grid>
                    <Grid size={4} >
                        <div className="border radius-lg p-2 flex justify-center items-center gap-1">
                            <div>
                                <Radio 
                                    checked={draft.gender === 'Boy'}
                                    onChange={handelChange}
                                    value="Boy"
                                    name="gender"
                                    // inputProps={{ 'aria-label': 'A' }}
                                />
                            </div>
                            <div className="bg-biru-light p-1 rounded radius-lg">
                                <img src="/icons/Boy.svg" alt="Boy" />
                            </div>
                            <div>Boy</div>
                        </div>
                    </Grid>
                    <Grid size={4} >
                        <div className='border radius-lg p-2 flex justify-center items-center gap-1' >
                            <div>
                                <Radio 
                                    checked={draft.gender === 'Girl'}
                                    onChange={handelChange}
                                    value="Girl"
                                    name="gender"
                                    // inputProps={{ 'aria-label': 'A' }}
                                />
                            </div>
                            <div className="bg-pink p-1 rounded radius-lg">
                                <img src="/icons/Girl.svg" alt="Girl" />
                            </div>
                            <div>Girl</div>
                        </div>
                    </Grid>
                </Grid>
                <Grid size={6}>
                    <TextField fullWidth name='placephone_number' id="placephone_number" label="Phone number" variant="outlined" onBlur={handelChange}/>
                </Grid>
                <Grid size={12}>
                    <TextField fullWidth name='address' id="address" label="Address" variant="outlined" onBlur={handelChange}/>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProspectiveStudentInformation