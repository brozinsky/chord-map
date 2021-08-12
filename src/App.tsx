import * as React from 'react';
import './App.scss';
import Keyboard from './components/Keyboard/Keyboard';
import Sequencer from './components/Sequencer/Sequencer';
import Pads from './components/Pads/Pads';
import Panel from './components/Panel/Panel';
import Tabs from './components/Navigation/Tabs/Tabs';
import { AppContext } from './contexts/AppContext';

function App() {
  const { state } = React.useContext(AppContext);
  const { activeTab } = state;
  return (
    <>
      <Keyboard />
      <Panel />
      <Tabs />
      {{
        1: <Sequencer />,
        2: <Pads />
      }[activeTab]}
    </>
  );
}

export default App;