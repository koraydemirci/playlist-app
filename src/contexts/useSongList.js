import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';

const API_URL = new URL(
  'http://ws.audioscrobbler.com/2.0/?method=track.search&api_key=0b323aba795f3ac625e85352f08e65b1&format=json'
);

const SongList = createContext();

export function useSongList() {
  const context = useContext(SongList);

  if (!context) {
    throw new Error('useSongList must be used within an SongListProvider');
  }

  return context;
}

export function SongListProvider(props) {
  const [searchterm, setSearchterm] = useState('');
  const [songs, setSongs] = useState([]);
  const [playlist, setPlayList] = useState([]);
  const [playlistSongs, setPlayListSongs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const debouncedSearchTerm = useDebounce(searchterm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      const fetchSongs = async () => {
        try {
          setLoading(true);
          setError(false);
          API_URL.searchParams.set('track', debouncedSearchTerm);
          const response = await fetch(API_URL);
          const data = await response.json();
          let songList = [];
          if (data.results) {
            songList = data.results.trackmatches.track;
          }
          setSongs(songList);
        } catch (error) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };

      fetchSongs();
    } else {
      setSongs([]);
      setLoading(false);
    }
  }, [debouncedSearchTerm]);

  const value = useMemo(() => {
    const handleSearchterm = (event) => {
      setSearchterm(event.target.value.trim());
    };

    const handleToggleSong = (url) => {
      let updatedPlayListIds = [];
      let updatedPlaylistSongs = [];
      if (playlist.includes(url)) {
        updatedPlayListIds = playlist.filter((songUrl) => songUrl !== url);
        updatedPlaylistSongs = playlistSongs.filter((song) => song.url !== url);
      } else {
        updatedPlayListIds = playlist.concat(url);
        const addedSong = songs.find((song) => song.url === url);
        updatedPlaylistSongs = playlistSongs.concat(addedSong);
      }
      setPlayList(updatedPlayListIds);
      setPlayListSongs(updatedPlaylistSongs);
    };

    return {
      loading,
      error,
      songs,
      playlist,
      playlistSongs,
      handleSearchterm,
      handleToggleSong,
    };
  }, [playlist, loading, error, songs, playlistSongs]);

  return <SongList.Provider value={value} {...props} />;
}
