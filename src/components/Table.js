import TableRow from './TableRow';

export default function Table({ songs, handleToggleSong, playlist }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Add/Remove From Playlist</th>
        </tr>
      </thead>
      <tbody>
        {songs.map(({ url, artist, name }) => (
          <TableRow
            key={url}
            url={url}
            artist={artist}
            name={name}
            playlist={playlist}
            handleToggleSong={handleToggleSong}
          />
        ))}
      </tbody>
    </table>
  );
}
