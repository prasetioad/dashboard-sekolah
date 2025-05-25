import React from 'react';
import { Grid, TextField, Typography, Radio } from '@mui/material';
import SelectSmall from './DropDownMenu';
import CustomDatePicker from '@/hooks/CustomDatePicker';
import { ParentOfGuardianProps } from './TypeData';

export default function ParentOfGuardian({
    listData,
    draft,
    index,
    handleWaliChange,
}: ParentOfGuardianProps) {
    return (
        <div className="border flex flex-col gap-2 radius-lg rounded-lg">
            <div className="flex justify-between border p-3 items-center radius-lg rounded-t-lg">
                <div className="text-md font-semibold">Parent or Guardian Information</div>
                <div className="flex gap-1 items-center cursor-pointer">
                    <img src="/icons/plus.svg" alt="add" />
                    <div className="text-xs font-semibold text-blue-dark">Add New</div>
                </div>
            </div>

            <Grid container spacing={2} style={{ padding: 12 }}>
                <Grid size={3}>
                    <SelectSmall
                        name="status_wali"
                        label="Who (Father/Mother/Other)"
                        master={listData}
                        value={draft.status_wali === '0' ? 'Mother' : draft.status_wali === '1' ? 'Father' : 'Other'}
                        onChange={(val) => handleWaliChange(index, 'status_wali', val)}
                    />
                </Grid>
                <Grid size={3}>
                    <TextField
                        fullWidth
                        name="nama"
                        label="Full name"
                        value={draft.nama}
                        onChange={(e) => handleWaliChange(index, 'nama', e.target.value)}
                    />
                </Grid>
                <Grid size={3}>
                    <CustomDatePicker
                        name="tanggal_lahir"
                        label="Date of birth"
                        value={draft.tanggal_lahir ? new Date(draft.tanggal_lahir) : null}
                        onChange={(date) => handleWaliChange(index, 'tanggal_lahir', date ? +date : 0)}
                        size="medium"
                        disableFuture
                    />
                </Grid>
                <Grid size={3}>
                    <TextField
                        fullWidth
                        name="tempat_lahir"
                        label="Place of birth"
                        value={draft.tempat_lahir}
                        onChange={(e) => handleWaliChange(index, 'tempat_lahir', e.target.value)}
                    />
                </Grid>

                <Grid size={12} container spacing={2}>
                    <Grid size={6} className="flex items-center">
                        <Grid size={4}>
                            <Typography className="p-4">Gender</Typography>
                        </Grid>
                        <Grid size={5}>
                            <div className="border radius-lg p-2 flex justify-center items-center gap-1">
                                <Radio
                                    checked={draft.jenis_kelamin === '0'}
                                    onChange={() => handleWaliChange(index, 'jenis_kelamin', '0')}
                                    value="0"
                                    name="jenis_kelamin"
                                />
                                <div className="bg-blue-light p-1 rounded radius-lg">
                                    <img src="/icons/Man.svg" alt="Man" />
                                </div>
                                <div>Man</div>
                            </div>
                        </Grid>
                        <Grid size={5}>
                            <div className="border radius-lg p-2 flex justify-center items-center gap-1">
                                <Radio
                                    checked={draft.jenis_kelamin === '1'}
                                    onChange={() => handleWaliChange(index, 'jenis_kelamin', '1')}
                                    value="1"
                                    name="jenis_kelamin"
                                />
                                <div className="bg-pink p-1 rounded radius-lg">
                                    <img src="/icons/Woman.svg" alt="Woman" />
                                </div>
                                <div>Woman</div>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid size={6}>
                        <TextField
                            fullWidth
                            name="nomor_telepon"
                            label="Phone number"
                            value={draft.nomor_telepon}
                            onChange={(e) => handleWaliChange(index, 'nomor_telepon', e.target.value)}
                        />
                    </Grid>
                </Grid>

                <Grid size={12}>
                    <TextField
                        fullWidth
                        name="alamat"
                        label="Address"
                        value={draft.alamat}
                        onChange={(e) => handleWaliChange(index, 'alamat', e.target.value)}
                    />
                </Grid>
            </Grid>
        </div>
    );
}
