import { useState } from 'react';

interface FiltersProps {
  onSearchChange: (search: string) => void;
}

function Filters({ onSearchChange }: FiltersProps) {
  const [search, setSearch] = useState('');

  const changeSearch = (str: string) => {
    setSearch(str);
    onSearchChange(str);
  };

  const searchChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeSearch(e.target.value.toLowerCase());
  };

  const clearHandler = () => {
    changeSearch('');
  };

  return (
    <div className='border-b flex items-baseline'>
      <input
        type='text'
        className='block pl-5 pr-0 py-2 w-full shrink outline-none'
        placeholder='Search'
        value={search}
        onChange={searchChangeHandler}
      />
      {search && (
        <span onClick={clearHandler} className='p-2 cursor-pointer text-gray-600'>
          ⨉
        </span>
      )}
    </div>
  );
}

export default Filters;
