import SearchBar from '@/components/SearchBar'
import Table from '@/components/Table/Table'
import React, { useState } from 'react'
import ParentOfGuardian from './ParentOfGuardian'
import ProspectiveStudentInformation from './ProspectiveStudentInformation'
import EducationalBackgroundInformation from './EducationalBackgroundInformation'
import UploadTransferReciept from './UploadTransferReciept'
import useSearchAndSort from '@/hooks/useSearchAndSort'


function StudentRegistration() {
  const [draft, setDraft] = useState({})
  const [keyword, setKeyword] = useState('')
  const [keywordFiled, setKeywordFiled] = useState('')
  const [sortField, setsortField] = useState('name')
  const [sortType, setSortType] = useState('dsc')

  const handelChange = (e:any) => {
    const {name, value} = e.target
    return
    setDraft({
      ...draft,
      [name] : value,
    })
  }
  const listData = [
    'Father', 'Mother', 'Other'
  ]

  const students = [
    { no: 'REX-2069291854S', name: 'Scarlett Fatimah', status: 'Hadir', average: 85, gender:'female' },
    { no: 'REX-1960380456R', name: 'Carter Westervelt M.', status: 'Hadir', average: 78, gender:'female' },
    { no: 'REX-1851470202Q', name: 'Skylar Curtis', status: 'Hadir', average: 92, gender:'male' },
    { no: 'REX-1742563558P', name: 'Aaliyah Bennett', status: 'Sakit', average: 70, gender:'female' },
    { no: 'REX-1633650163O', name: 'Elijah Harrison', status: 'Hadir', average: 88, gender:'female' },
  ];
  

  const filteredData = useSearchAndSort(students, keyword, "name", "name", sortType )
  
  return (
    <div className='grid grid-row-2 gap-4'>
      <div className="grid grid-cols-1 gap-3 w-full bg-white rounded-lg p-3">
        <div className='flex flex-col'>
          <div className='text-lg font-semibold'>List of Registered Students</div>
          <div className='text-xs text-grey'>Displaying student data sorted by most recent entries.</div>
        </div>
          <SearchBar keyword={keyword} setKeyword={setKeyword} placeholder='Search....' withFilter={true}/>
        <div>
          <Table listData={filteredData} />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 w-full bg-white rounded-lg p-3">
        <div className='flex gap-4 contents-center'>
          <div>
            <img src="/icons/surveman-enrollment.svg" alt="image" />
          </div >
          <div className='content-center'>
            <div className='text-lg font-semibold'>Enroll New Student</div>
            <div className='text-xs text-grey'>Tincidunt egestas sagittis erat ut in donec ultrices. Commodo eu amet vulputate pharetra venenatis.</div>
          </div>
        </div>
        <ProspectiveStudentInformation handelChange={handelChange} draft={draft}/>
        <ParentOfGuardian listData={listData} handelChange={handelChange} draft={draft} />
        <EducationalBackgroundInformation listData={listData} handelChange={handelChange} draft={draft}/>
        <UploadTransferReciept />
      </div>
    </div>
  )
}

export default StudentRegistration