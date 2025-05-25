import React, { useState } from 'react';
import UploadWithPreview from '@/components/UploadFile/uploadFileWithPreview';
import { Typography } from '@mui/material';

function UploadTransferReciept() {
  const [receipt, setReceipt] = useState<File | null>(null);

  return (
    <div className="border radius-lg flex flex-col gap-2 rounded-lg">
        <div className="flex justify-between border p-3 items-center radius-lg rounded-t-lg">
            <div className="text-md font-semibold">Upload transfer receipt</div>
        </div>
    <div className='p-3'>
      <UploadWithPreview
        placeholder="Upload transfer receipt (Max. 10Mb)"
        accept="application/pdf,image/*"
        onFileChange={(file) => setReceipt(file)}
      />
    </div>
    
    <div className='pt-1 pl-3 pb-3'>
      <Typography className="text-sm" fontSize={12}>
        ⚠️ Please ensure that the submitted proof of transfer is accurate!
      </Typography>
      <p className="font-thin" style={{ fontSize: '12px' }}>
        Double-check your uploaded proof to make sure your payment is processed
        without any issues.
      </p>
    </div>
    </div>
  );
}

export default UploadTransferReciept;
