import * as React from 'react';
import './Panel.scss';
import { AppContext } from '../../contexts/AppContext';
import PanelSelect from './PanelSelect'
import PanelCheckbox from './PanelCheckbox'

const keysRootOptions = [{ name: 'c', value: 'c' },
{ name: 'c#', value: 'cs' }, { name: 'd', value: 'd' },
{ name: 'd#', value: 'ds' }, { name: 'e', value: 'e' },
{ name: 'f', value: 'f' }, { name: 'f#', value: 'fs' },
{ name: 'g', value: 'g' }, { name: 'g#', value: 'gs' },
{ name: 'a', value: 'a' }, { name: 'a#', value: 'as' },
{ name: 'b', value: 'b' }]

const displayChordsOptions = [{ name: 'Roman/Chords', value: 'roman-chords' },
{ name: 'Roman Numerals', value: 'roman' },
{ name: 'Chords', value: 'chords' },
]

const displayNotesOptions = [{ name: 'All', value: 'all' },
{ name: 'Scale', value: 'scale' },
{ name: 'Chord', value: 'chord' },
{ name: 'None', value: 'none' },]

const keysRootName = 'Root'
const displayChordsName = 'Chord symbols'
const displayNotesName = 'Notes'

export default function Panel() {
    const { state, setState } = React.useContext(AppContext);
    const { rootNote, displayChords, displayNotes, isRootNoteMarked } = state

    const handleRootNoteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setState(prevState => {
            return {
                ...prevState,
                rootNote: event.target.value
            }
        })
    }

    const handleChordSymbolChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setState(prevState => {
            return {
                ...prevState,
                displayChords: event.target.value
            }
        })
    }

    const handleNotesDisplayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setState(prevState => {
            return {
                ...prevState,
                displayNotes: event.target.value
            }
        })
    }

    const handleRootMarkChange = () => {
        setState(prevState => {
            return {
                ...prevState,
                isRootNoteMarked: !isRootNoteMarked
            }
        })
    }

    return (
        <div className="panel-wrap">
            <form className="panel">
                <PanelSelect
                    selectName={keysRootName}
                    handleChange={handleRootNoteChange}
                    options={keysRootOptions}
                    value={rootNote} />
                <PanelSelect handleChange={handleChordSymbolChange}
                    selectName={displayChordsName}
                    options={displayChordsOptions}
                    value={displayChords} />
                <PanelSelect handleChange={handleNotesDisplayChange}
                    selectName={displayNotesName}
                    options={displayNotesOptions}
                    value={displayNotes} />
                <PanelCheckbox handleChange={handleRootMarkChange}
                    name="isRootNoteMarked"
                    checked={isRootNoteMarked} />
            </form>
        </div>
    )
}