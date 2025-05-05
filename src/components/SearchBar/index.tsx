type SearchBarProps = {
    keyword: string;
    setKeyword: (value: string) => void;
    placeholder?: string;
    withFilter :boolean
  };
  
  const SearchBar: React.FC<SearchBarProps> = ({ keyword, setKeyword, placeholder, withFilter }) => {
    return (
      <div className='flex gap-2 items-center'>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder={placeholder || "Search..."}
          className="p-2 border rounded w-80"
        />
        {withFilter && 
          <div className='border rounded p-2 items-center'>
            <img src="/icons/filter.svg" alt="filter" />
          </div>}
      </div>
    );
  };
  
  export default SearchBar