import * as React from 'react';
import './Keyboard.scss';
import Key from './Key';
import { AppContext } from '../../contexts/AppContext';

export default function Keyboard() {
    const { state, } = React.useContext(AppContext);

    const keys = state.keys

    return (
        <div className="keys">
            {keys.map((key, index) => {
                return <Key key={index}
                    note={key.name}
                    value={key.value}
                    isWhite={key.isWhite}
                />
            })}
        </div>
    );
}