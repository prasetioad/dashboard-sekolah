import { useMemo } from 'react';

function useSearchAndSort<T>(
  data: T[],
  keyword: string,
  keywordField: keyof T,
  sortField: keyof T,
  sortType: 'asc' | 'dsc'
): T[] {
  return useMemo(() => {
    if (!Array.isArray(data)) return [];

    // 🔍 Filtering
    const filtered = keyword
      ? data.filter(item =>
          String(item[keywordField] || '')
            .toLowerCase()
            .includes(keyword.toLowerCase())
        )
      : data;

    // ↕️ Sorting
    const sorted = [...filtered].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];

      if (aVal == null || bVal == null) return 0;

      if (aVal < bVal) return sortType === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortType === 'dsc' ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [data, keyword, keywordField, sortField, sortType]);
}

export default useSearchAndSort;
