import * as React from 'react';
import { AppContext } from '../../contexts/AppContext';
import useSound from 'use-sound';

import a2Note from '../../assets/a2.mp3'
import a3Note from '../../assets/a3.mp3'
import as2Note from '../../assets/as2.mp3'
import as3Note from '../../assets/as3.mp3'
import b2Note from '../../assets/b2.mp3'
import b3Note from '../../assets/b3.mp3'
import c2Note from '../../assets/c2.mp3'
import c3Note from '../../assets/c3.mp3'
import cs2Note from '../../assets/cs2.mp3'
import cs3Note from '../../assets/cs3.mp3'
import d2Note from '../../assets/d2.mp3'
import d3Note from '../../assets/d3.mp3'
import ds2Note from '../../assets/ds2.mp3'
import ds3Note from '../../assets/ds3.mp3'
import e2Note from '../../assets/e2.mp3'
import e3Note from '../../assets/e3.mp3'
import f2Note from '../../assets/f2.mp3'
import f3Note from '../../assets/f3.mp3'
import fs2Note from '../../assets/fs2.mp3'
import fs3Note from '../../assets/fs3.mp3'
import g2Note from '../../assets/g2.mp3'
import g3Note from '../../assets/g3.mp3'
import gs2Note from '../../assets/gs2.mp3'
import gs3Note from '../../assets/gs3.mp3'

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

const keys = ['c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b']

const Pad = ({ name }: IAppProps) => {
    const [isActive, setIsActive] = React.useState<boolean>(false);
    // const [activeNotes, setActiveNotes] = React.useState<number[]>([]);
    const { setState } = React.useContext(AppContext);
    const [rootNote, setRootNote] = React.useState<string>('c');

    const [a2Play] = useSound(a2Note);
    const [a3Play] = useSound(a3Note);
    const [as2Play] = useSound(as2Note);
    const [as3Play] = useSound(as3Note);
    const [b2Play] = useSound(b2Note);
    const [b3Play] = useSound(b3Note);
    const [c2Play] = useSound(c2Note);
    const [c3Play] = useSound(c3Note);
    const [cs2Play] = useSound(cs2Note);
    const [cs3Play] = useSound(cs3Note);
    const [d2Play] = useSound(d2Note);
    const [d3Play] = useSound(d3Note);
    const [ds2Play] = useSound(ds2Note);
    const [ds3Play] = useSound(ds3Note);
    const [e2Play] = useSound(e2Note);
    const [e3Play] = useSound(e3Note);
    const [f2Play] = useSound(f2Note);
    const [f3Play] = useSound(f3Note);
    const [fs2Play] = useSound(fs2Note);
    const [fs3Play] = useSound(fs3Note);
    const [g2Play] = useSound(g2Note);
    const [g3Play] = useSound(g3Note);
    const [gs2Play] = useSound(gs2Note);
    const [gs3Play] = useSound(gs3Note);

    const playArray = [c2Play, cs2Play, d2Play, ds2Play, e2Play, f2Play,
        fs2Play, g2Play, gs2Play, a2Play, as2Play, b2Play,
        c3Play, cs3Play, d3Play, ds3Play, e3Play, f3Play,
        fs3Play, g3Play, gs3Play, a3Play, as3Play, b3Play,
    ]

    const createChord = (root: string, notesArray: number[]) => {
        //change array order based on root note
        const rootIndex = keys.indexOf(root)
        const firstHalf = keys.slice(rootIndex, keys.length)
        const secondHalf = keys.slice(0, rootIndex)
        const keysRootFirst = firstHalf.concat(secondHalf)

        const playArrayRootFirst = playArray.slice(rootIndex, playArray.length).concat(playArray.slice(0, rootIndex))

        console.log(rootIndex)


        //create chord array with notes
        // const newChord = notesArray.map((note) => {
        //     const chordNote = keysRootFirst[note]
        //     let chordArr = []
        //     chordArr.push(chordNote)
        //     return chordArr
        // })

        // const functionPlay = notesArray.map((note) => {
        //     const playFn = playArray[note - 1]

        //     return playFn
        // })
        notesArray.forEach((note) => {
            const playFn = playArrayRootFirst[note - 1]
            return playFn()
        })
    }


    const handleClick = () => {

        setTimeout(() => {
            setIsActive(false)
        }, 500);
        const chordNotes = chords.find(chord => chord.name === name)?.notes as number[]
        setState({ activeNotes: chordNotes })

        createChord('c', chordNotes)
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
