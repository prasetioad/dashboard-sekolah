import React from 'react';
import { Typography, IconButton } from '@mui/material';
import { Trash2 } from 'lucide-react'; // Atau ganti dengan <img src="/icons/trash.svg" />

interface UploadedFilePreviewProps {
  file: File;
  onRemove: () => void;
}

export default function UploadedFilePreview({ file, onRemove }: UploadedFilePreviewProps) {
  return (
    <div className="border rounded-lg p-3 flex items-center justify-between bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <img src="/icons/pdf-icon.svg" alt="pdf" className="w-5 h-5" />
        <Typography className="text-sm">{file.name}</Typography>
      </div>
      <IconButton onClick={onRemove} size="small" color="error">
        <img src="/icons/trashbag.svg" alt="Remove"/>
      </IconButton>
    </div>
  );
}
