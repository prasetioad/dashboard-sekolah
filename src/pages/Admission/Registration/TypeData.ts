export interface Root {
    no: number
    status: string
    nama: string
    tanggal_lahir: number | Date
    tempat_lahir: string
    jenis_kelamin: string
    nomor_handphone: string
    alamat: string
    id_tahun_ajaran: number
    wali: Wali[]
    nama_sekolah: string
    kota: string
    tahun_lulus: string
    rapor: string
    bukti_transfer: string
    riwayat_sekolah: EducationalBackground[];
  }
  
  export interface Wali {
    nama: string
    tanggal_lahir: number | Date
    tempat_lahir: string
    jenis_kelamin: string
    nomor_telepon: string
    alamat: string
    pendapatan: number
    status_wali: string
  }
  
  export interface ParentOfGuardianProps {
    listData: string[]; // e.g., ['Father', 'Mother', 'Other']
    draft: Wali;
    index: number;
    handleWaliChange: (
      index: number,
      field: keyof Wali,
      value: string | number
    ) => void;
  }

  export interface EducationalBackground {
    id: number;
    school_name: string;
    school_city_regency: string;
    graduation_year: string;
    report_card_and_diploma: File | null;
  }
  