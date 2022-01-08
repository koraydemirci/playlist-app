import SearchInput from './SearchInput';
import SearchResults from './SearchResults';

export default function Search() {
  return (
    <div className='songlist-container'>
      <SearchInput />
      <SearchResults />
    </div>
  );
}
