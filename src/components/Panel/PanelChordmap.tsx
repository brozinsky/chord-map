import * as React from 'react';
import './Panel.scss';
import { AppContext } from '../../contexts/AppContext';
import PanelSelect from './PanelSelect'
import { keysRootOptions, displayChordsOptions } from '../../constants/panelOptions'

const keysRootName = 'Scale'
const displayChordsName = 'Chord symbols'

export default function PanelChordmap() {
    const { state, setState } = React.useContext(AppContext);
    const { rootNote, displayChords, } = state

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
            </form>
        </div>
    )
}