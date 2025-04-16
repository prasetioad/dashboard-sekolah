import { PieChart, Pie, Cell } from 'recharts';

const PresenceRing = () => {
  const data = [
    { name: 'Masuk', value: 24 },
    { name: 'Sakit', value: 2 },
  ];

  const COLORS = ['#22c55e', '#e2e8f0'];

  return (
    <div className="bg-white rounded-2xl p-4 shadow w-full">
      <div className="flex justify-between items-center border-b p-2">
        <div className="text-sm text-gray-500 mb-2">Rekapitulasi <br /> <span className='font-bold text-sm'>Presensi Murid</span></div>
        <div className='text-sm font-bold text-gray-500'>14 Mei 2025</div>
      </div>
      <div className="flex items-center justify-center relative">
        <PieChart width={150} height={150}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={60}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div className="absolute text-center">
          <div className="text-lg font-bold">26</div>
          <div className="text-xs text-gray-400">Total Murid</div>
        </div>
      </div>
      <div className="flex justify-between text-xs mt-2 px-4">
        <span className="text-purple-600">● Masuk 24</span>
        <span className="text-gray-400">● Sakit 2</span>
      </div>
    </div>
  );
};

export default PresenceRing;