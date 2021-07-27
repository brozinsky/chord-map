import * as React from 'react';
import { AppContext } from '../../contexts/AppContext';

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

const Pad = ({ name }: IAppProps) => {
    const [isActive, setIsActive] = React.useState<boolean>(false);
    // const [activeNotes, setActiveNotes] = React.useState<number[]>([]);
    const { setState } = React.useContext(AppContext);

    const handleClick = () => {
        console.log(`klik ${name}`)
        setIsActive(true)
        setTimeout(() => {
            setIsActive(false)
        }, 500);

        const chordNotes = chords.find(chord => chord.name === name)?.notes as number[]
        setState({ activeNotes: chordNotes })
        console.log(chordNotes)
    }

    return (
        <button onClick={handleClick}
            className={`pad
        ${isActive ? 'pad--active' : ''}
        pad-${name}
        `}>{name}</button>
    )
}

export default Pad
