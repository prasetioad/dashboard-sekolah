import { useState } from "react";
import useSearchAndSort from '@/hooks/useSearchAndSort'

const StudentsTable = () => {

  const students = [
    { no: 1, name: 'Scarlett Fatimah', status: 'Hadir', average: 85 },
    { no: 2, name: 'Carter Westervelt M.', status: 'Hadir', average: 78 },
    { no: 3, name: 'Skylar Curtis', status: 'Hadir', average: 92 },
    { no: 4, name: 'Aaliyah Bennett', status: 'Sakit', average: 70 },
    { no: 5, name: 'Elijah Harrison', status: 'Hadir', average: 88 },
    { no: 6, name: 'Nora Rodriguez', status: 'Izin', average: 81 },
    { no: 7, name: 'Mateo Coleman', status: 'Hadir', average: 75 },
    { no: 8, name: 'Hazel Sanders', status: 'Alpa', average: 65 },
    { no: 9, name: 'Owen Mitchell', status: 'Hadir', average: 90 },
    { no: 10, name: 'Luna Perez', status: 'Hadir', average: 83 },
    { no: 11, name: 'Gabriel Hayes', status: 'Sakit', average: 77 },
    { no: 12, name: 'Layla Foster', status: 'Hadir', average: 86 },
    { no: 13, name: 'Isaac Jenkins', status: 'Izin', average: 79 },
    { no: 14, name: 'Chloe Torres', status: 'Hadir', average: 95 },
    { no: 15, name: 'Samuel Rivera', status: 'Alpa', average: 68 },
    { no: 16, name: 'Penelope Bell', status: 'Hadir', average: 82 },
    { no: 17, name: 'Joseph Murphy', status: 'Hadir', average: 73 },
    { no: 18, name: 'Victoria Gray', status: 'Sakit', average: 89 },
    { no: 19, name: 'Henry Sullivan', status: 'Hadir', average: 87 },
    { no: 20, name: 'Grace Kelly', status: 'Izin', average: 76 },
    { no: 21, name: 'William Howard', status: 'Hadir', average: 91 },
    { no: 22, name: 'Audrey Carter', status: 'Alpa', average: 71 },
    { no: 23, name: 'Benjamin Phillips', status: 'Hadir', average: 84 },
    { no: 24, name: 'Stella Adams', status: 'Hadir', average: 74 },
    { no: 25, name: 'Daniel Baker', status: 'Sakit', average: 93 },
    { no: 26, name: 'Lily Ross', status: 'Hadir', average: 80 },
    { no: 27, name: 'Alexander Wright', status: 'Izin', average: 72 },
    { no: 28, name: 'Natalie Cook', status: 'Hadir', average: 85 },
    { no: 29, name: 'Sebastian Hall', status: 'Alpa', average: 69 },
    { no: 30, name: 'Eleanor Green', status: 'Hadir', average: 78 },
    { no: 31, name: 'David King', status: 'Hadir', average: 90 },
    { no: 32, name: 'Samantha Lewis', status: 'Sakit', average: 81 },
    { no: 33, name: 'Christopher Nelson', status: 'Hadir', average: 76 },
    { no: 34, name: 'Ella Walker', status: 'Izin', average: 88 },
    { no: 35, name: 'Ryan Young', status: 'Hadir', average: 73 },
    { no: 36, name: 'Sofia Allen', status: 'Alpa', average: 92 },
    { no: 37, name: 'Matthew Martinez', status: 'Hadir', average: 79 },
    { no: 38, name: 'Brooklyn Harris', status: 'Hadir', average: 83 },
  ];
  const [keyword, setkeyword] = useState('')
  const [keywordFiled, setKeywordFiled] = useState('')
  const [sortField, setsortField] = useState('name')
  const [sortType, setSortType] = useState('dsc')

  const filteredData = useSearchAndSort(students, keyword, "name", "name", sortType )
  return (
    <div className="bg-white rounded-2xl p-4 shadow w-full">
      <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
        <span className='text-lg font-bold'>Daftar Murid Kelas IX</span>
        <span className="flex justify-end gap-2">Juni 2024 - Juli 2025 <img src="/icons/arrow-down.svg" /></span>
      </div>
      <div className="mb-2">
        <input type="text" placeholder="Search" className="border p-2 text-sm rounded w-full" onChange={(e)=> setkeyword(e.target.value)} />
      </div>
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-gray-400 border-b">
            <th className="p-2">No</th>
            <th className="p-2">Nama Murid</th>
            <th className="p-2">Status Presensi</th>
            <th className="p-2">Nilai Rata-rata</th>
            <th className="p-2">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((student) => (
            <tr key={student.no} className="border-b">
              <td className="p-2">{student.no}</td>
              <td className="p-2">{student.name}</td>
              <td className="p-2">{student.status}</td>
              <td className="p-2">{student.average}</td>
              <td className="p-2 text-blue-500 cursor-pointer">lihat</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsTable;