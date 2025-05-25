import React from 'react';
import { Grid, TextField, Typography } from '@mui/material';
import Panel from '@/components/Panel';
import { Root, EducationalBackground } from './TypeData';
import UploadWithPreview from '@/components/UploadFile/uploadFileWithPreview'

interface EducationalBackgroundProps {
    draft: Root;
    setDraft: React.Dispatch<React.SetStateAction<Root>>;
    listData: string[];
    handleChange: (field: keyof Root, value: string | number) => void;
}

export default function EducationalBackgroundInformation({
    draft,
    setDraft,
}: EducationalBackgroundProps) {
    const handleAddInput = () => {
        const newInput: EducationalBackground = {
            id: draft.riwayat_sekolah.length + 1,
            school_name: '',
            school_city_regency: '',
            graduation_year: '',
            report_card_and_diploma: null,
        };

        setDraft((prev) => ({
            ...prev,
            riwayat_sekolah: [...prev.riwayat_sekolah, newInput],
        }));
    };

    const handleChange = (
        index: number,
        field: keyof EducationalBackground,
        value: string | File | null
    ) => {
        const updated = [...draft.riwayat_sekolah];
        updated[index] = {
            ...updated[index],
            [field]: value,
        };

        setDraft((prev) => ({
            ...prev,
            riwayat_sekolah: updated,
        }));
    };

    const handleDelete = (index: number) => {
        const updated = draft.riwayat_sekolah.filter((_, i) => i !== index);
        setDraft((prev) => ({
            ...prev,
            riwayat_sekolah: updated,
        }));
    };

    return (
        <div className="border flex flex-col rounded-lg">
            <div className="flex justify-between border radius-lg p-3 items-center rounded-t-lg">
                <div className="text-md font-semibold">Educational Background Information</div>
                <div
                    className="flex gap-1 items-center cursor-pointer"
                    onClick={handleAddInput}
                >
                    <img src="/icons/plus.svg" alt="add" />
                    <div className="text-xs font-semibold text-blue-dark">Add New</div>
                </div>
            </div>

            {draft.riwayat_sekolah.map((item, index) => (
                <Grid
                    container
                    spacing={2}
                    key={item.id}
                    className="border radius-lg p-3"
                >
                    <Grid size={6}>
                        <TextField
                            fullWidth
                            label="School name"
                            value={item.school_name}
                            onChange={(e) => handleChange(index, 'school_name', e.target.value)}
                        />
                    </Grid>
                    <Grid size={3}>
                        <TextField
                            fullWidth
                            label="City/Regency"
                            value={item.school_city_regency}
                            onChange={(e) => handleChange(index, 'school_city_regency', e.target.value)}
                        />
                    </Grid>
                    <Grid size={3}>
                        <TextField
                            fullWidth
                            label="Graduation year"
                            value={item.graduation_year}
                            onChange={(e) => handleChange(index, 'graduation_year', e.target.value)}
                        />
                    </Grid>

                    <Grid size={12}>
                        <UploadWithPreview
                            placeholder="Upload transfer receipt (Max. 10Mb)"
                            accept="application/pdf,image/*"
                            onFileChange={(file) => handleChange(index, 'report_card_and_diploma', file)}
                        />
                    </Grid>
                </Grid>
            ))}
        </div>
    );
}
