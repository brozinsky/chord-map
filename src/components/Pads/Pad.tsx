import * as React from 'react';
import { AppContext } from '../../contexts/AppContext';
import useSound from 'use-sound';
import allPianoSamples from '../../assets/allsamples.mp3'
import { chordsRomanMajor } from '../../constants/chords';
import { keyNotes } from '../../constants/notes';
export interface IAppProps {
    name: string,
}

// const chords: {
//     name: string,
//     notes: number[],
//     nextChord: string[],
//     suffixes: string[]
// }[] = [
//         {
//             name: 'I', notes: [1, 5, 8],
//             nextChord: ['ii', 'iii', 'IV', 'V', 'vi', 'vii'],
//             suffixes: ['2', '6', 'M7', 'sus', 'M9']
//         },
//         {
//             name: 'ii', notes: [3, 6, 10], nextChord: ['iii', 'V'],
//             suffixes: ['m7', 'm9']
//         },
//         {
//             name: 'iii', notes: [5, 8, 12], nextChord: ['IV', 'vi'],
//             suffixes: ['7']
//         },
//         {
//             name: 'IV', notes: [6, 10, 13], nextChord: ['I', 'ii', 'V'],
//             suffixes: ['6', 'M7', 'm', 'm6']
//         },
//         {
//             name: 'V', notes: [8, 12, 15], nextChord: ['I', 'iii', 'vi',],
//             suffixes: ['7', '9', '11', 'sus', '13']
//         },
//         {
//             name: 'vi', notes: [10, 13, 17], nextChord: ['ii', 'IV', 'vi'],
//             suffixes: ['m7', 'm9']
//         },
//     ]

// const keys: string[] = ['c2', 'cs2', 'd2', 'ds2', 'e2', 'f2', 'fs2', 'g2', 'gs2', 'a2', 'as2', 'b2',
//     'c3', 'cs3', 'd3', 'ds3', 'e3', 'f3', 'fs3', 'g3', 'gs3', 'a3', 'as3', 'b3']

const Pad = ({ name }: IAppProps) => {
    const [isActive, setIsActive] = React.useState<boolean>(false);
    const [isNext, setIsNext] = React.useState<boolean>(false);
    const { state, setState } = React.useContext(AppContext);
    const { rootNote, hintedChords, displayChords } = state

    //change array order based on root note
    const rootIndex = keyNotes.indexOf(rootNote + '2')
    const keysRootFirst = keyNotes.slice(rootIndex, keyNotes.length)
    //find roman numeral and pair it to its chord counterpart based on chosen root note
    const chordLetter = keysRootFirst[chordsRomanMajor.findIndex(chord => chord.name === name)]
        .slice(0, -1)
    // .replace("s", "#");

    let chordMinor: string = ''
    if (name === 'ii' || name === 'iii' || name === 'vi') {
        chordMinor = 'm'
    }

    // add hint for next chord
    React.useEffect(() => {
        if (hintedChords.filter(chordName => chordName === name).length > 0) {
            setIsNext(true)
            setTimeout(() => {
                setIsNext(false)
            }, 1500)
        } else {
            setIsNext(false)
        }
    }, [hintedChords])

    //get all notes from single sample
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
        setIsNext(false)
        setIsActive(false)
        setTimeout(() => {
            setIsActive(false)
        }, 500);
        const chordNotes = chordsRomanMajor.find(chord => chord.name === name)?.notes as number[]
        const hintedChords = chordsRomanMajor.find(chord => chord.name === name)?.nextChord as string[]
        setState(prevState => {
            return {
                ...prevState,
                activeNotes: chordNotes,
                hintedChords
            }
        })
        setTimeout(() => {
            setState(prevState => {
                return {
                    ...prevState,
                    hintedChords: []
                }
            })
        }, 200);
        createChord(rootNote, chordNotes)
        setIsActive(true)
    }

    return (
        <>
            <button onClick={handleClick}
                className={`pad
                pad-${name}
                ${isActive ? 'pad--active' : ''}
                ${isNext ? 'pad--hint' : ''} `}>
                <div className={`pad__name-primary`}>
                    <div className={`pad__name-suffix-container`}>
                        {chordsRomanMajor.find(chord => chord.name === name)?.suffixes
                            .map((suffix, index) => {
                                return <div key={index} className={`pad__name-suffix`}>{suffix}</div>
                            })}
                    </div>
                    {displayChords === 'chords'
                        ? null
                        : name}
                </div>
                {displayChords === 'roman-chords'
                    ? <hr className={`pad__name-line`} />
                    : null}
                <div className={`pad__name-secondary`}>
                    {displayChords === 'roman'
                        ? null
                        : chordLetter}
                    <span className={`pad__name-span`}>
                        {displayChords === 'roman'
                            ? null
                            : chordMinor}
                    </span>
                </div>
            </button>
        </>
    )
}

export default Pad
