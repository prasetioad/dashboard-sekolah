import ComingSoon from '@/components/Commingsoon'
import UploadFile from '@/components/UploadFIle/UploadFile'
import React, { useState } from 'react'

function UploadTransferReciept() {
    const [draft, setDraft] = useState({})
    return (
        <div className='border radius-lg flex flex-col gap-2'>
            <div className='text-sm font-semibold border radius-lg p-3'>Upload transfer receipt</div>
            <div className="dropzone">
                <UploadFile draft={draft} setDraft={setDraft} placeholder='Upload transfer receipt (Max. 10Mb)'/>
            </div>
        </div>
    )
}

export default UploadTransferReciept