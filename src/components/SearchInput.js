import { useSongList } from '../contexts/useSongList';

export default function SearchInput() {
  const { handleSearchterm } = useSongList();

  return (
    <div className='input-container'>
      <label htmlFor='search'>Search</label>
      <input type='text' name='' id='search' onChange={handleSearchterm} />
    </div>
  );
}
