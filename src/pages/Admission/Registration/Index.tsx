import React, { useEffect, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import Table from '@/components/Table/Table';
import ParentOfGuardian from './ParentOfGuardian';
import ProspectiveStudentInformation from './ProspectiveStudentInformation';
import EducationalBackgroundInformation from './EducationalBackgroundInformation';
import UploadTransferReciept from './UploadTransferReciept';
import useSearchAndSort from '@/hooks/useSearchAndSort';
import { initialEmptyDraft } from './initialEmptyDraft';
import { Root } from './TypeData';

function StudentRegistration() {
  const [students, setStudents] = useState<Root[]>([]);
  const [draft, setDraft] = useState<Root>(() => ({ ...initialEmptyDraft }));
  const [keyword, setKeyword] = useState('');
  const [sortField, setSortField] = useState<keyof Root>("nama");
  const [sortType, setSortType] = useState<'asc' | 'dsc'>('dsc');
  const sampleData = [
    {
      no: 1,
      status: "Registration",
      nama: "Alika",
      tanggal_lahir: 998989200000,
      tempat_lahir: "Jakarta",
      jenis_kelamin: "0",
      nomor_handphone: "08123456789",
      alamat: "Jl. Kebon Kacang No. 28",
      id_tahun_ajaran: 3,
      wali: [
        {
          nama: "Man",
          tanggal_lahir: -43945200000,
          tempat_lahir: "Jakarta",
          jenis_kelamin: "1",
          nomor_telepon: "081265318764",
          alamat: "Jl. Kebon Kacang No. 28",
          pendapatan: 10000000,
          status_wali: "1",
        },
        {
          nama: "Woman",
          tanggal_lahir: 113821200000,
          tempat_lahir: "Jakarta",
          jenis_kelamin: "1",
          nomor_telepon: "081265318764",
          alamat: "Jl. Kebon Kacang No. 28",
          pendapatan: 2000000,
          status_wali: "0",
        },
      ],
      nama_sekolah: "SMPN 40 Jakarta",
      kota: "Jakarta Pusat",
      tahun_lulus: "2016",
      rapor:
        "JVBERi0xLjMKJcTl8uXrp/Og0MTGCjUgMCBvYmoKPDwgL0ZpbHRlciAvRmxhdGVEZWNvZGUgL0xlbmd0aCA3MyA+PgpzdHJlYW0KeAErVAhUKFTQD0gtSk4tKClNzFEoygQKGJobG+pZmhkrGAChkYm5oZ6xuYmCgZ6poaGJhRFIODlXQd8z11DBJR9oQiAApjURiwplbmRzdHJlYW0KZW5kb2JqCjEgMCBvYmoKPDwgL1R5cGUgL1BhZ2UgL1BhcmVudCAyIDAgUiAvUmVzb3VyY2VzIDYgMCBSIC9Db250ZW50cyA1IDAgUiAvTWVkaWFCb3ggWzAgMCAxNzMyLjk4NiAyNDcxLjM3NF0KL1JvdGF0ZSAwIC9BQVBMOlBQSyAzIDAgUiAvQUFQTDpQUEtIYXNoIDQgMCBSID4",
      bukti_transfer: '',
      riwayat_sekolah: [],
    },
  ];
  useEffect(() => {
    setStudents(sampleData)
  }, []);

  const handleChange = (
    field: keyof Root,
    value: string | number
  ) => {
    setDraft(prev => ({
      ...prev,
      [field]: value,
    }));
  };
  

  const handleWaliChange = (index: number, field: keyof Root['wali'][0], value: string | number) => {
    const newWali = [...draft.wali];
    newWali[index] = {
      ...newWali[index],
      [field]: value,
    };
    setDraft(prev => ({
      ...prev,
      wali: newWali,
    }));
  };

  const handleSubmit = () => {
    console.log('Submitting draft:', draft);
    // TODO: kirim ke API di sini
  };
  
  const handleEdit = (selected: Root) => {
    setDraft({ ...selected });
  };  

  const filteredData = useSearchAndSort(students, keyword, sortField, sortField, sortType);

  const listData = ['Father', 'Mother', 'Other'];
  console.log('draftCheck', draft);
  return (
    <div className="grid grid-row-2 gap-4">
      {/* Bagian Tabel */}
      <div className="grid grid-cols-1 gap-3 w-full bg-white rounded-lg p-3">
        <div className="flex flex-col">
          <div className="text-lg font-semibold">List of Registered Students</div>
          <div className="text-xs text-grey">Displaying student data sorted by most recent entries.</div>
        </div>
        <SearchBar keyword={keyword} setKeyword={setKeyword} placeholder="Search...." withFilter={true} />
        <div>
        <Table
          listData={filteredData}
          handleEdit={handleEdit}
          columns={[
            { key: 'no', label: 'Registration Number' },
            {
              key: 'nama',
              label: 'Student Name',
              render: (val, row) => (
                <div className="flex items-center gap-2">
                  <img
                    src={row.jenis_kelamin === '0' ? '/icons/Girl.svg' : '/icons/Boy.svg'}
                    className={`p-1 rounded-md ${
                      row.jenis_kelamin === '0' ? 'bg-blue-light' : 'bg-pink'
                    }`}
                  />
                  {val}
                </div>
              ),
            },
            { key: 'status', label: 'Status' },
          ]}
        />

        </div>
      </div>

      {/* Bagian Form Admisi */}
      <div className="grid grid-cols-1 gap-4 w-full bg-white rounded-lg p-3">
        <div className="flex gap-4 contents-center">
          <div>
            <img src="/icons/surveman-enrollment.svg" alt="image" />
          </div>
          <div className="content-center">
            <div className="text-lg font-semibold">Enroll New Student</div>
            <div className="text-xs text-grey">
              Tincidunt egestas sagittis erat ut in donec ultrices. Commodo eu amet vulputate pharetra venenatis.
            </div>
          </div>
        </div>
        <ProspectiveStudentInformation draft={draft} handleChange={handleChange} />
        {draft.wali.map((waliItem, i) => (
          <ParentOfGuardian
            key={i}
            index={i}
            draft={waliItem}
            listData={listData}
            handleWaliChange={handleWaliChange}
          />
        ))}
        <EducationalBackgroundInformation draft={draft} handleChange={handleChange} setDraft={setDraft} listData={listData} />
        <UploadTransferReciept />
        <div className="flex justify-end gap-4 mt-4">
          <button
            className="px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
            onClick={() => setDraft({ ...initialEmptyDraft })}
          >
            Clear
          </button>
          <button
            className="px-4 py-2 bg-blue-dark text-white border border-gray-300   rounded hover:bg-blue-700"
            onClick={() => handleSubmit()}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default StudentRegistration;
