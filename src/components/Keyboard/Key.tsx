import * as React from 'react';
import { AppContext } from '../../contexts/AppContext';
export interface IAppProps {
    note: string,
    value: string,
    isWhite: boolean,
    isInScale: boolean
}

const Key = ({ note, isWhite, value, isInScale }: IAppProps) => {
    const { state } = React.useContext(AppContext);
    const { rootNote, displayNotes, activeChord, isRootNoteMarked } = state
    const [isActive, setIsActive] = React.useState<boolean>(false);
    const [isNoteVisible, setIsNoteVisible] = React.useState<boolean>(false);

    const rootNoteSharp = rootNote.replace('s', '#')

    React.useEffect(() => {
        if (activeChord.filter(note => note === value).length > 0) {
            setIsActive(true)
            setTimeout(() => {
                setIsActive(false)
            }, 200);
        }
    }, [activeChord, value])

    React.useEffect(() => {
        setIsNoteVisible(false)
        if (displayNotes === 'all')
            setIsNoteVisible(true)
        else if (displayNotes === 'none')
            setIsNoteVisible(false)
        else if (displayNotes === 'chord' && isActive)
            setIsNoteVisible(true)
        else if (displayNotes === 'scale' && isInScale)
            setIsNoteVisible(true)
    }, [displayNotes, isActive, isInScale])

    return (
        <>
            <button className={`keys__${note}
                    ${isWhite
                    ? 'keys__white'
                    : 'keys__black'}
                    ${isActive
                    ? 'keys--active'
                    : ''}
                    `}>
                <span className={`keys__note
                        ${isRootNoteMarked
                        && note === rootNoteSharp
                        ? 'keys__note--root'
                        : ''}
                        ${isNoteVisible
                        ? 'keys__note--on'
                        : 'keys__note--off'}
                `}>
                    {note}
                </span>
            </button>
        </>
    )
}

export default Key
