import Table from './Table';
import Message from './Message';
import { useSongList } from '../contexts/useSongList';

export default function SearchResults() {
  const { loading, error, songs, playlist, handleToggleSong } = useSongList();

  const isMessage = loading || error || songs.length === 0;
  if (isMessage) {
    return (
      <Message loading={loading} error={error} noSong={songs.length === 0} />
    );
  }
  return (
    <div className='search-results-container'>
      <Table
        songs={songs}
        handleToggleSong={handleToggleSong}
        playlist={playlist}
      />
    </div>
  );
}
