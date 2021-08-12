import * as React from 'react';
import './Panel.scss';
import { AppContext } from '../../contexts/AppContext';
import PanelSelect from './PanelSelect'
import PanelCheckbox from './PanelCheckbox'
import { displayNotesOptions } from '../../constants/panelOptions'

const displayNotesName = 'Notes'

export default function Panel() {
    const { state, setState } = React.useContext(AppContext);
    const { displayNotes, isRootNoteMarked } = state

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