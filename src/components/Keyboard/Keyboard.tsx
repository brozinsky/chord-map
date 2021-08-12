import * as React from 'react';
import './Keyboard.scss';
import Key from './Key';
import { AppContext } from '../../contexts/AppContext';
import { scales } from '../../constants/scales';
import { arrangeNotesByRoot } from '../../functions/functions';

export default function Keyboard() {
    const { state, } = React.useContext(AppContext);
    const { keys, rootNote } = state

    // const majorScale: number[] = [1, 3, 5, 6, 8, 10, 12]
    // const keySymbols: string[] = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b']

    // const rootIndex = notes.indexOf(rootNote)
    const keysRootFirst = arrangeNotesByRoot(rootNote)
    const currentScale = scales[0].notes.map(i => keysRootFirst[i - 1])

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