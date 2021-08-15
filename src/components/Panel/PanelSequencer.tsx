import * as React from 'react';
import './Panel.scss';
import { AppContext } from '../../contexts/AppContext';
import { keysRootOptions, scalesOptions } from '../../constants/panelOptions'

const keysRootName = 'Scale'

export default function PanelChordmap() {
    const { state, setState } = React.useContext(AppContext);
    const { rootNote, scaleType } = state

    const handleRootNoteChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setState(prevState => {
            return {
                ...prevState,
                rootNote: event.target.value
            }
        })
    }

    const handleScaleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setState(prevState => {
            return {
                ...prevState,
                scaleType: event.target.value
            }
        })
    }

    return (
        <div className="panel-wrap">
            <form className="panel">
                <label className="panel__item"
                    htmlFor={'Scale'}>
                    Scale:
                    <select
                        className="panel__select"
                        value={rootNote}
                        onChange={handleRootNoteChange}
                    >
                        {keysRootOptions.map(({ value, name }, index) => {
                            return <option value={value} key={index}>
                                {name}
                            </option>
                        })}
                    </select>
                    <select
                        className="panel__select"
                        value={scaleType}
                        onChange={handleScaleTypeChange}
                    >
                        {scalesOptions.map(({ name }, index) => {
                            return <option value={name} key={index}>
                                {name}
                            </option>
                        })}
                    </select>
                </label>
            </form>
        </div>
    )
}