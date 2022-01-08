export default function Message({ loading, error, noSong, noPlaylist }) {
  if (noPlaylist) {
    return <div className='message'>You have no songs in your playlist.</div>;
  }

  if (!loading && !error && noSong) {
    return <div className='message'>Please type to search songs.</div>;
  }

  if (loading) {
    return <div className='message'>Loading...</div>;
  }

  if (error) {
    return (
      <div className='message'>
        Something Went Wrong! Please Try Again Later!
      </div>
    );
  }
}
