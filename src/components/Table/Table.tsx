import React from 'react';

export interface TableProps<T> {
  listData: T[];
  columns: { key: keyof T; label: string; render?: (value: any, row: T) => React.ReactNode }[];
  handleEdit?: (row: T) => void;
}

export default function Table<T>({ listData, columns, handleEdit }: TableProps<T>) {
  return (
    <table className="w-full text-sm text-left border">
      <thead>
        <tr className="text-gray-400 border-b bg-grey-white">
          {columns.map((col, idx) => (
            <th key={idx} className={idx === 0 ? 'p-2 w-48 text-center':'p-2'}>
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {listData.map((row, idx) => (
          <tr
            key={idx}
            onClick={() => handleEdit?.(row)}
            className={`${
              idx % 2 === 0 ? 'bg-white' : 'bg-grey-white'
            } hover:bg-gray-200 cursor-pointer`}
          >
            {columns.map((col, i) => (
              <td key={i} className={i === 0 ?"text-center":"p-2"}>
                {col.render ? col.render(row[col.key], row) : (row[col.key] as any)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
