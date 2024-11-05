import React from 'react';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Display from './components/Display';
import PlayerContextProvider from './context/PlayerContext';
import { useContext } from 'react';
import { PlayerContext } from './context/PlayerContext';

const App = () => {
  const {audioRef,track} = useContext(PlayerContext)
  return (
    <div className='flex flex-col h-screen bg-black'> 
      
      <div className='h-[90%] flex flex-row'>
          <Sidebar />
          <Display /> 

      </div> 
      
      


      <div> <Player /></div>
      <audio ref = {audioRef} src={track.file} preload = "auto"></audio>

    </div>
  );
}

export default App;
