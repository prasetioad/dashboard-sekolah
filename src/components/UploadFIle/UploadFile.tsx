import React, { useRef, useState } from 'react'
import { uploadProps } from './interface';

function UploadFile(props: uploadProps) {
    const { draft, setDraft, placeholder } = props
    const [dragActive, setDragActive] = useState(false)
    const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleSetDraft =(file:any) => {
        setDraft({
            target : {
                name :'file',
                value :file
            }
        })
    }
    const handleClick = () => {
        fileInputRef.current?.click(); // trigger input file
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]; // Pakai optional chaining

        if (file) {
            setSelectedFileName(file.name);
            handleSetDraft(file)
        } else {
            console.log('logThis, Tidak ada file dipilih.');
        }
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        setDragActive(false);
        const file = e.dataTransfer.files?.[0];
        if (file) {
            setSelectedFileName(file.name);
            handleSetDraft(file)
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragActive(true);
    };

    const handleDragLeave = () => {
        setDragActive(false);
    };

    return (
        <div 
            onClick={handleClick}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colorsbg-blue-100 
            border-blue-light ${selectedFileName?'wave-background':''}`} 
        >
            <div className='flex flex-col items-center relative z-10 text-gray-700'>
                <img src="/icons/Upload.svg" alt="upload" />
                <div>{selectedFileName ? selectedFileName:placeholder}</div>
            </div>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                style={{ display: 'none' }}
                name='file'
            />
            {/* Animasi CSS */}
            <style>{`
                .wave-background {
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: repeating-linear-gradient(
                    5deg,
                    rgba(3, 166, 248, 0) 50%,
                    rgba(70, 172, 255, 0.51) 55%,
                    rgba(36, 123, 237, 0.26) 30%
                );
                background-size: 200% 200%;
                animation: wave 6s ease-in-out infinite;
                z-index: 0;
                border-radius: 0.5rem;
                }

                @keyframes wave {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
                }
            `}</style>
        </div>
    )
}

export default UploadFile