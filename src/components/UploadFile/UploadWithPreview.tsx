import React, { useState } from 'react';
import UploadFile from './UploadFile';
import UploadedFilePreview from './uploadFileReview';

interface UploadWithPreviewProps {
  placeholder: string;
  accept?: string;
  onFileChange: (file: File | null) => void;
}

export default function UploadWithPreview({
  placeholder,
  accept = '*',
  onFileChange,
}: UploadWithPreviewProps) {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = (uploaded: File) => {
    setFile(uploaded);
    onFileChange(uploaded);
  };

  const handleRemove = () => {
    setFile(null);
    onFileChange(null);
  };

  return (
    <>
      {file ? (
        <UploadedFilePreview file={file} onRemove={handleRemove} />
      ) : (
        <UploadFile placeholder={placeholder} accept={accept} onUpload={handleUpload} />
      )}
    </>
  );
}
