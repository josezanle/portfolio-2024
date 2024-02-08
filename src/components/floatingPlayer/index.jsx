import React, { useState, useRef } from 'react';
import './index.css';

import SONG from "/songs/song1.mp3"

const FloatingPlayer = () => {

  const playerRef = useRef(null);

  const songUri = "2UZZtkoLOg7IHxeTAdPFvd"



  // ---------------------------
  // ---------------------------
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const songs = [
    SONG,
    // 'spotify:track:2UZZtkoLOg7IHxeTAdPFvd',
    // 'spotify:track:SEGUNDO_URI_DE_CANCIÓN',
    // Agrega más URIs según sea necesario
  ];
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const playPauseHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const skipTrackHandler = (direction) => {
    if (direction === 'forward') {
      setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    } else if (direction === 'backward') {
      setCurrentSongIndex(
        (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
      );
    }
  };

  return (
    <div className='floating__player__container'>
      <audio ref={audioRef} src={songs[currentSongIndex]} />
      <div>
        <button onClick={() => skipTrackHandler('backward')}>Atrás</button>
        <button onClick={playPauseHandler}>{isPlaying ? 'Pausa' : 'Reproducir'}</button>
        <button onClick={() => skipTrackHandler('forward')}>Adelante</button>
      </div>
    </div>


  );
};

export default FloatingPlayer;


//   <iframe
//     title="Spotify Player"
//     src={`https://open.spotify.com/embed/track/${songUri}`}
//     width="300"
//     height="380"
//     frameBorder="0"
//     allowtransparency="true"
//     allow="encrypted-media"
//   ></iframe>
