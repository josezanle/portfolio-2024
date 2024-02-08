import React, { useState, useRef } from 'react';
import './index.css';

import SONG from "/songs/song1.mp3"

const FloatingPlayer = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: 500, y: 150 });
  const playerRef = useRef(null);

  const songUri = "2UZZtkoLOg7IHxeTAdPFvd"

  const handleMouseDown = (e) => {
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newX = position.x + e.movementX;
      const newY = position.y + e.movementY;
      setPosition({ x: newX, y: newY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

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
  // ---------------------------
  // ---------------------------

  return (
    <div
      ref={playerRef}
      className='floating__player__container'
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        position: 'absolute',
        zIndex: 1000, // Ajusta el índice z según sea necesario para que esté por encima de otros elementos
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {/* ----------------- */}
      {/* ----------------- */}
      <div>
        <audio ref={audioRef} src={songs[currentSongIndex]} />
        <div>
          <button onClick={() => skipTrackHandler('backward')}>Atrás</button>
          <button onClick={playPauseHandler}>
            {isPlaying ? 'Pausa' : 'Reproducir'}
          </button>
          <button onClick={() => skipTrackHandler('forward')}>Adelante</button>
        </div>
      </div>
      {/* ----------------- */}
      {/* ----------------- */}

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
