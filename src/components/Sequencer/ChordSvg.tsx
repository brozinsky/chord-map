import React from 'react'
import { AppContext } from '../../contexts/AppContext';
import { notesAlph } from '../../constants/notes';

export interface IAppProps {
    fill: number[],
    name: string,
    chords: {
        name: string,
        notes: number[],
        nextChord: string[],
        suffix: string
    }[]
}

const ChordSvg = ({ fill, name, chords, suffix }) => {
    const { state } = React.useContext(AppContext);
    const { rootNote, keys } = state;

    // const keySymbols: string[] = ['c', 'cs', 'd', 'ds', 'e', 'f', 'fs', 'g', 'gs', 'a', 'as', 'b']
    const fillIndex = notesAlph.indexOf(rootNote)
    const keysRootFirst = keys.slice(fillIndex, keys.length).concat(keys.slice(0, fillIndex))
    let chordName = keysRootFirst[chords.findIndex(chord => chord.name === name)].name
        .replace("s", "#");

    let fillNotes = ['none', '#444', 'none', '#444', 'none', 'none',
        '#444', 'none', '#444', '#none', '#444', 'none',
        'none', '#444', 'none', '#444', 'none', 'none',
        '#444', 'none', '#444', '#none', '#444', 'none',
    ]
    //fill [10, 13, 17] >>>>> np d >> fillNotes[17 - 1 + 2] = fillNotes[18]
    fill.forEach(num => fillNotes[num - 1 + fillIndex] = '#83A0C9')

    const rectData = [
        { positionX: '0.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[0] },
        { positionX: '9.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[2] },
        { positionX: '18.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[4] },
        { positionX: '27.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[5] },
        { positionX: '36.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[7] },
        { positionX: '45.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[9] },
        { positionX: '54.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[11] },

        { positionX: '63.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[12] },
        { positionX: '72.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[14] },
        { positionX: '81.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[16] },
        { positionX: '90.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[17] },
        { positionX: '99.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[19] },
        { positionX: '108.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[21] },
        { positionX: '117.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[23] },

        { positionX: '7', positionY: '6', width: '4', height: '18', fill: fillNotes[1] },
        { positionX: '16', positionY: '6', width: '4', height: '18', fill: fillNotes[3] },
        { positionX: '34', positionY: '6', width: '4', height: '18', fill: fillNotes[6] },
        { positionX: '43', positionY: '6', width: '4', height: '18', fill: fillNotes[8] },
        { positionX: '52', positionY: '6', width: '4', height: '18', fill: fillNotes[10] },

        { positionX: '70', positionY: '6', width: '4', height: '18', fill: fillNotes[13] },
        { positionX: '79', positionY: '6', width: '4', height: '18', fill: fillNotes[15] },
        { positionX: '88', positionY: '6', width: '4', height: '18', fill: fillNotes[18] },
        { positionX: '106', positionY: '6', width: '4', height: '18', fill: fillNotes[20] },
        { positionX: '115', positionY: '6', width: '4', height: '18', fill: fillNotes[22] },
    ]

    return (
        <li className="chord-list__item">{name}
            <svg width="220" height="72" viewBox="0 0 126 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                {rectData.map(({ positionX, positionY, width, height, fill }, index) => {
                    return <rect key={index} x={positionX} y={positionY} width={width} height={height} fill={fill} stroke="#444" strokeWidth="0.2" />
                })}
            </svg>
            {chordName + suffix}
        </li>
    )
}

export default ChordSvg