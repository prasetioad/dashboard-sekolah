import Layout from "../../../Layouts/Layout"

type Siswa = {
    id: number;
    nama: string;
    hadir: boolean;
}

const dataAbsesnsi:Siswa[] = [
    { id: 1, nama: 'Budi', hadir: true },
    { id: 2, nama: 'Siti', hadir: false },
    { id: 3, nama: 'Andi', hadir: true },
]

const Absensi = () => {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-4">Halaman Absensi</h2>

        <table className="w-full text-left border border-gray-300">
            <thead>
                <tr className="bg-gray-100">
                    <th className="p-2 border-b">No</th>
                    <th className="p-2 border-b">Nama</th>
                    <th className="p-2 border-b">Status</th>
                </tr>
            </thead>
            <tbody>
                {dataAbsesnsi.map((siswa,index) => (
                    <tr key={siswa.id}>
                        <td className="p-2 border-b">{index + 1}</td>
                        <td className="p-2 border-b">{siswa.nama}</td>
                        <td className={`p-2 border-b ${siswa.hadir? 'text-green-600' : 'text-red-500'}`}>
                            {siswa.hadir ? 'Hadir' : 'Tidak Hadir'}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
      </div>
    )
  }
  
  export default Absensi
  