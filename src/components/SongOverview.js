import React, { useState } from "react";
import SongForm from "./SongForm";

function SongOverview() {
  const [songs, setStateSongs] = useState([]);

  const addSong = (newSongObject) => {
    setStateSongs([...songs, newSongObject]);
  };
  // En nu geen idee verder over hoe ik het in de DOM krijg
  return (
    <div>
      <h1>Playlist</h1>
      <SongForm addSong={addSong} />
      <table>
        <tbody>
          <tr>
            <th>Song{addSong.title}</th>
            <th>Artist</th>
            <th>Genre</th>
            <th>Rating</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default SongOverview;
