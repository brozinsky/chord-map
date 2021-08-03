import * as React from 'react';
import './Keyboard.scss';
import Key from './Key';
import { AppContext } from '../../contexts/AppContext';

export default function Keyboard() {
    const { state, } = React.useContext(AppContext);
    const { keys, rootNote } = state

    const majorScale: number[] = [1, 3, 5, 6, 8, 10, 12]
    const keySymbols: string[] = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b']

    const rootIndex = keySymbols.indexOf(rootNote)
    const keysRootFirst = keySymbols.slice(rootIndex, keySymbols.length).concat(keySymbols.slice(0, rootIndex))
    const currentScale = majorScale.map(i => keysRootFirst[i - 1])

    return (
        <div className="keys">
            {keys.map(({ name, value, isWhite }, index) => {
                const isInScale = currentScale.includes(name)
                return <Key key={index}
                    note={name}
                    value={value}
                    isWhite={isWhite}
                    isInScale={isInScale}
                />
            })}
        </div>
    );
}