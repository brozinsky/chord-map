import React from 'react'
import { AppContext } from '../../../contexts/AppContext';

const Tab = ({ name, value }) => {
    const { state, setState } = React.useContext(AppContext);
    const { activeTab } = state;

    const handleClick = () => {
        setState(prevState => {
            return {
                ...prevState,
                activeTab: value
            }
        })
    }

    return (
        <li className={`tabs__item ${activeTab === value ? 'tabs__item--active' : ''}`}>
            <button className='tabs__item-btn'
                onClick={handleClick}>
                {name}
            </button >
        </li>
    )
}

export default Tab
