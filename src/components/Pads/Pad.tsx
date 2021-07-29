import * as React from 'react';
import { AppContext } from '../../contexts/AppContext';
import useSound from 'use-sound';
import allPianoSamples from '../../assets/allsamples.mp3'
export interface IAppProps {
    name: string,
}

const chords: { name: string, notes: number[]; }[] = [
    { 'name': 'I', 'notes': [1, 5, 8] },
    { 'name': 'ii', 'notes': [3, 6, 10] },
    { 'name': 'iii', 'notes': [5, 8, 12] },
    { 'name': 'IV', 'notes': [6, 10, 13] },
    { 'name': 'V', 'notes': [8, 12, 15] },
    { 'name': 'vi', 'notes': [10, 13, 17] },
    { 'name': 'vii', 'notes': [12, 15, 18] }
]

const keys: string[] = ['c2', 'cs2', 'd2', 'ds2', 'e2', 'f2', 'fs2', 'g2', 'gs2', 'a2', 'as2', 'b2',
    'c3', 'cs3', 'd3', 'ds3', 'e3', 'f3', 'fs3', 'g3', 'gs3', 'a3', 'as3', 'b3']

const Pad = ({ name }: IAppProps) => {
    const [isActive, setIsActive] = React.useState<boolean>(false);
    // const [activeNotes, setActiveNotes] = React.useState<number[]>([]);
    const { state, setState } = React.useContext(AppContext);
    const [rootNote, setRootNote] = React.useState<string>('c');

    const msLength = 2000

    const [play] = useSound(allPianoSamples, {
        sprite: {
            c2: [0, msLength], cs2: [2000, msLength],
            d2: [4000, msLength], ds2: [6000, msLength],
            e2: [8000, msLength], f2: [10000, msLength],
            fs2: [12000, msLength], g2: [14000, msLength],
            gs2: [16000, msLength], a2: [18000, msLength],
            as2: [20000, msLength], b2: [22000, msLength],
            c3: [24000, msLength], cs3: [26000, msLength],
            d3: [28000, msLength], ds3: [30000, msLength],
            e3: [32000, msLength], f3: [34000, msLength],
            fs3: [36000, msLength], g3: [38000, msLength],
            gs3: [40000, msLength], a3: [42000, msLength],
            as3: [44000, msLength], b3: [46000, msLength],
            "__default": [
                0,
                621
            ]
        },
    });

    const createChord = (root: string, notesArray: number[]) => {
        //change array order based on root note
        const rootIndex = keys.indexOf(root + '2')
        const keysRootFirst = keys.slice(rootIndex, keys.length)

        //create chord array with notes
        const newChord = notesArray.map((note) => {
            const chordNote = keysRootFirst[note - 1].toString()

            return chordNote
        })
        setState(prevState => {
            return {
                ...prevState,
                activeChord: newChord
            }
        })
        newChord.forEach((note) => {
            return play({ id: note })
        })
    }

    const handleClick = () => {
        setTimeout(() => {
            setIsActive(false)
        }, 500);
        const chordNotes = chords.find(chord => chord.name === name)?.notes as number[]
        setState(prevState => {
            return {
                ...prevState,
                activeNotes: chordNotes
            }
        })
        createChord(state.rootNote, chordNotes)
        setIsActive(true)
    }

    return (
        <>
            <button onClick={handleClick}
                className={`pad
            ${isActive ? 'pad--active' : ''}
            pad-${name}
            `}>{name}</button>
        </>
    )
}

export default Pad
