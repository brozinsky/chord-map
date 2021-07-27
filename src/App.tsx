import * as React from 'react';
import './App.scss';
import Keyboard from './components/Keyboard/Keyboard';
import Sequencer from './components/Sequencer/Sequencer';
import Pads from './components/Pads/Pads';

function App() {
  return (
    <>
      <Keyboard />
      <Sequencer />
      <Pads />
    </>
  );
}

export default App;