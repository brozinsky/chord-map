import * as React from 'react';
import './Panel.scss';
import { AppContext } from '../../contexts/AppContext';
import PanelSelect from './PanelSelect'
import { keysRootOptions } from '../../constants/panelOptions'

const keysRootName = 'Scale'

export default function PanelChordmap() {
    const { state, setState } = React.useContext(AppContext);
    const { rootNote } = state

    const handleRootNoteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setState(prevState => {
            return {
                ...prevState,
                rootNote: event.target.value
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
            </form>
        </div>
    )
}