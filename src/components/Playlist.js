import { useSongList } from '../contexts/useSongList';
import Table from './Table';
import Message from './Message';

export default function Playlist() {
  const { playlistSongs, playlist, handleToggleSong } = useSongList();

  return (
    <div className='playlist-container'>
      <div className='playlist-header-container'>
        <h1>My Playlist</h1>
      </div>
      {playlistSongs.length === 0 ? (
        <Message noPlaylist={true} />
      ) : (
        <div className='playlist-songs-container'>
          <Table
            songs={playlistSongs}
            handleToggleSong={handleToggleSong}
            playlist={playlist}
          />
        </div>
      )}
    </div>
  );
}
