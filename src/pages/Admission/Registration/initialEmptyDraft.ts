import { Root } from './TypeData';  
export const initialEmptyDraft: Root = {
    no: 0,
    nama: '',
    status: '',
    tanggal_lahir: 0,
    tempat_lahir: '',
    jenis_kelamin: '',
    nomor_handphone: '',
    alamat: '',
    id_tahun_ajaran: 0,
    wali: [
      {
        nama: '',
        tanggal_lahir: 0,
        tempat_lahir: '',
        jenis_kelamin: '',
        nomor_telepon: '',
        alamat: '',
        pendapatan: 0,
        status_wali: '',
      }
    ],
    riwayat_sekolah :[
        {
            id: 0,
            school_name: '',
            school_city_regency: '',
            graduation_year: '',
            report_card_and_diploma: null
        }
    ],
    nama_sekolah: '',
    kota: '',
    tahun_lulus: '',
    rapor: '',
    bukti_transfer: ''
  };