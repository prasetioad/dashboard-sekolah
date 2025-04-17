import { useMemo } from 'react';

  type student = {
    no:number;
    name:string;
    status:string,
    average:number
  }

function useSearchAndSort (data:student[], keyword:string, keywordField:keyof student, sortField:keyof student, sortType:string) {
    return useMemo(() => {
      if(Array.isArray(data)){
        const filtered = keyword  
        ? data.filter(item => 
          String(item[keywordField] || '')
          .toLowerCase()
          .includes(keyword.toLowerCase())
        )
        :data;

      const sorted = [...filtered].sort((a,b) => {
        const aVal = a[sortField];
        const bVal = b[sortField];

        if (aVal < bVal) return sortType === 'asc' ? -1 : 1;
        if (aVal > bVal) return sortType === 'dsc' ? 1 : -1;
        return 0;      
      });

      return sorted;
      }else{
        return[]
      }
    }, [data, keyword, keywordField, sortField, sortType])
  };

  export default useSearchAndSort;