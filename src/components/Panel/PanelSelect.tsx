import React from 'react'

const PanelSelect = ({ handleChange, options, value, selectName }) => {
    return (
        <label className="panel__item"
            htmlFor={selectName}>
            {selectName}
            <select
                className="panel__select"
                value={value}
                onChange={handleChange}
                name={selectName}>
                {options.map(({ value, name }) => {
                    return <option value={value}>
                        {name}
                    </option>
                })}
            </select>
        </label>
    )
}

export default PanelSelect
