import * as React from 'react';
import './Keyboard.scss';
import Key from './Key';

const keys = [
    { note: 'c', isWhite: true },
    { note: 'c#', isWhite: false },
    { note: 'd', isWhite: true },
    { note: 'd#', isWhite: false },
    { note: 'e', isWhite: true },
    { note: 'f', isWhite: true },
    { note: 'f#', isWhite: false },
    { note: 'g', isWhite: true },
    { note: 'g#', isWhite: false },
    { note: 'a', isWhite: true },
    { note: 'a#', isWhite: false },
    { note: 'b', isWhite: true },
]

export default function Keyboard() {
    return (
        <div className="keys">
            {keys.map((key, index) => {
                return <Key key={index} number={index + 1} note={key.note} isWhite={key.isWhite} />
            })}
            {keys.map((key, index) => {
                return <Key key={index} number={index + 13} note={key.note} isWhite={key.isWhite} />
            })}
            {/* <Key note='c' isWhite={true} />
            <Key note='c#' isWhite={false} />
            <Key note='d' isWhite={true} />
            <Key note='d#' isWhite={false} />
            <Key note='e' isWhite={true} />
            <Key note='f' isWhite={true} />
            <Key note='f#' isWhite={false} />
            <Key note='g' isWhite={true} />
            <Key note='g#' isWhite={false} />
            <Key note='a' isWhite={true} />
            <Key note='a#' isWhite={false} />
            <Key note='b' isWhite={true} /> */}
        </div>
    );
}