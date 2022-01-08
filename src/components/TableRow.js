export default function TableRow({
  url,
  name,
  artist,
  handleToggleSong,
  playlist,
}) {
  return (
    <tr key={url}>
      <td>{name}</td>
      <td>{artist}</td>
      <td>
        <button onClick={() => handleToggleSong(url)}>
          {playlist.includes(url) ? 'Remove' : 'Add'}
        </button>
      </td>
    </tr>
  );
}
