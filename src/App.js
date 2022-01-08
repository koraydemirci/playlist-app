import './App.css';

import SongList from './components/SongList';
import Playlist from './components/Playlist';
import { SongListProvider } from './contexts/useSongList';

function App() {
  return (
    <div className='container'>
      <SongListProvider>
        <SongList />
        <Playlist />
      </SongListProvider>
    </div>
  );
}

export default App;
