import {
    ComposedChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine,
    LabelList,
} from "recharts";



const data = [
    { name: "KD1", nilai: 40 },
    { name: "KD2", nilai: 80 },
    { name: "KD3", nilai: 80 },
    { name: "KD4", nilai: 50 },
    { name: "KD5", nilai: 30 },
    { name: "KD6", nilai: 50 },
    { name: "KD7", nilai: 75 },
    { name: "KD8", nilai: 80 },
    { name: "KD9", nilai: 60 },
  ];

const BarChartKD = () => {  
  return (
    <div className="bg-white rounded-2xl p-4 shadow w-full">
      <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
        <span className='text-lg font-bold'>Rata-rata Nilai per KD</span>
        <span className="flex justify-end gap-2">Juni 2024 - Juli 2025 <img src="/icons/arrow-down.svg" /></span>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <ComposedChart data={data} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
            <XAxis dataKey="name" />
            <YAxis domain={[0, 100]} />
            <Tooltip />

            {/* Bar bawah (nilai siswa) */}
            <Bar
            dataKey="nilai"
            barSize={35}
            fill="#F9A825"
            radius={[4, 4, 0, 0]}
            >
            <LabelList
                dataKey="nilai"
                position="top"
                fill="#000"
                style={{ fontSize: 12, fontWeight: "bold" }}
            />
            </Bar>

            {/* Bar atas (sisa nilai 100 - nilai siswa) */}
            <Bar
            dataKey={(entry) => 100 - entry.nilai}
            stackId="a"
            barSize={35}
            fill="#FFF3E0"
            radius={[0, 0, 4, 4]}
            />

            {/* Garis target */}
            <ReferenceLine
            y={80}
            stroke="#FF8F00"
            strokeDasharray="3 3"
            label={{
                value: "80",
                position: "top",
                fill: "#FF8F00",
                fontSize: 12,
                fontWeight: "bold",
                offset: 10,
            }}
            />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartKD;