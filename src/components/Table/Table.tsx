import React from 'react'
import SearchBar from '../SearchBar'
import useSearchAndSort from '@/hooks/useSearchAndSort';
import { RegistrationProps } from '@/pages/Admission/Registration/Interface';

export default function Table(props:RegistrationProps) {
    const { listData, handelChange, draft } = props
    
    return (
        <table className="w-full text-sm text-left border">
            <thead>
                <tr className="text-gray-400 border-b bg-grey-white">
                    <th className="w-48 p-2 text-center">Registration Number</th>
                    <th className="p-2">Student Name</th>
                    <th className="p-2">Status</th>
                </tr>
            </thead>
            <tbody>
                {listData.map((student:any, idx:number) => (
                    <tr key={idx} className={`${idx % 2 === 0? 'bg-white':'bg-grey-white'} hover:bg-gray-200 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-600`}>
                        <td className="w-48 p-2 text-center">{student.no}</td>
                        <td className="p-2">
                            <div className='flex flex-start gap-2 items-center'>
                                <img src={student.gender == "female" ? "/icons/Girl.svg":"/icons/Boy.svg"} alt="" className={student.gender == "female" ? 'bg-blue-light rounded-md p-1':'bg-pink rounded-md p-1'}/>
                                {student.name}
                            </div>
                        </td>
                        <td className="p-2">{student.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
