
export type TScriningData = {
  id: number;
  fullName: string;
  tanggal_lahir: number | null;
  tempat_lahir: string;
  alamat: string;
  level?: number | string;
  grade: string;
  math: string;
  science: string;
  social: string;
  bahasa_indonesia: string;
  sport: string;
  art: string;
};

export type TDataTable = {
  id: number;
  registration_number: string;
  student_name: string;
  origin_school: string;
  status: string;
  result: string;
  action: string;
  student_image: string;
};

export type InputItem = {
  subject: string;
  name: keyof TScriningData;
  grade?: number;
  status?: string;
};