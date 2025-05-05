import ComingSoon from '@/components/Commingsoon'
import React from 'react'

function UploadTransferReciept() {
    return (
        <div className='border radius-lg flex flex-col gap-2'>
            <div className='text-sm font-semibold border radius-lg p-3'>Prospective students’ personal information</div>
            <div className="dropzone">
                <p>Drag & Drop file here</p>
                <input type="file" id="file-upload" style={{display:'none'}} />
            </div>
        </div>
    )
}

export default UploadTransferReciept