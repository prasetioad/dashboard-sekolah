import React from 'react'
import { Grid, TextField, Box, Typography, Radio } from '@mui/material'
import { Root } from './TypeData'
import CustomDatePicker from '@/hooks/CustomDatePicker'

type Props = {
    draft: Root
    handleChange: (field: keyof Root, value: string | number) => void
}

export default function ProspectiveStudentInformation({ draft, handleChange }: Props) {
    return (
        <div className='border radius-lg flex flex-col gap-2 rounded-lg'>
            <div className='text-md font-semibold border radius-lg p-3 rounded-t-lg'>
                Prospective students’ personal information
            </div>
            <Grid container spacing={2} style={{ padding: 12 }}>
                <Grid size={6}>
                    <TextField
                        value={draft.nama}
                        fullWidth
                        name='nama'
                        label="Full name"
                        variant="outlined"
                        onChange={(e) => handleChange('nama', e.target.value)}
                    />
                </Grid>
                <Grid size={3}>
                    <CustomDatePicker
                        name='tanggal_lahir'
                        label="Date of birth"
                        value={draft.tanggal_lahir ? new Date(draft.tanggal_lahir) : null}
                        onChange={(date) => handleChange('tanggal_lahir', date ? +date : 0)}
                        size='medium'
                        disableFuture
                    />
                </Grid>
                <Grid size={3}>
                    <TextField
                        value={draft.tempat_lahir}
                        fullWidth
                        name='tempat_lahir'
                        label="Place of birth"
                        variant="outlined"
                        onChange={(e) => handleChange('tempat_lahir', e.target.value)}
                    />
                </Grid>

                <Grid size={12} container spacing={2}>
                    <Grid size={6} className='flex items-center'>
                        <Grid size={4}>
                            <Typography className='p-4'>Gender</Typography>
                        </Grid>
                        <Grid size={5}>
                            <div className="border radius-lg p-2 flex justify-center items-center gap-1">
                                <Radio
                                    checked={draft.jenis_kelamin === '0'}
                                    onChange={() => handleChange('jenis_kelamin', '0')}
                                    value="0"
                                    name="jenis_kelamin"
                                />
                                <div className="bg-blue-light p-1 rounded radius-lg">
                                    <img src="/icons/Boy.svg" alt="Boy" />
                                </div>
                                <div>Boy</div>
                            </div>
                        </Grid>
                        <Grid size={5}>
                            <div className='border radius-lg p-2 flex justify-center items-center gap-1'>
                                <Radio
                                    checked={draft.jenis_kelamin === '1'}
                                    onChange={() => handleChange('jenis_kelamin', '1')}
                                    value="1"
                                    name="jenis_kelamin"
                                />
                                <div className="bg-pink p-1 rounded radius-lg">
                                    <img src="/icons/Girl.svg" alt="Girl" />
                                </div>
                                <div>Girl</div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid size={6}>
                        <TextField
                            value={draft.nomor_handphone}
                            fullWidth
                            name='nomor_handphone'
                            label="Phone number"
                            variant="outlined"
                            onChange={(e) => handleChange('nomor_handphone', e.target.value)}
                        />
                    </Grid>
                </Grid>

                <Grid size={12}>
                    <TextField
                        value={draft.alamat}
                        fullWidth
                        name='alamat'
                        label="Address"
                        variant="outlined"
                        onChange={(e) => handleChange('alamat', e.target.value)}
                    />
                </Grid>
            </Grid>
        </div>
    )
}
