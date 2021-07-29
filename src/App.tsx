import * as React from 'react';
import './App.scss';
import Keyboard from './components/Keyboard/Keyboard';
import Sequencer from './components/Sequencer/Sequencer';
import Pads from './components/Pads/Pads';
import Panel from './components/Panel/Panel';

function App() {
  return (
    <>
      <Keyboard />
      <Panel />
      <Sequencer />
      <Pads />
    </>
  );
}

export default App;