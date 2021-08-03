import React from 'react'

const PanelCheckbox = ({ handleChange, name, checked }) => {
    return (
        <label>
            Mark root
            <input
                name={name}
                type="checkbox"
                checked={checked}
                onChange={handleChange} />
        </label>
    )
}

export default PanelCheckbox