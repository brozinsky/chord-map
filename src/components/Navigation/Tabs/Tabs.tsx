import React from 'react'
import Tab from './Tab'
import './Tabs.scss'

const tabsDetails = [
    { name: 'Sequencer', value: 1 },
    { name: 'Chord map', value: 2 }
]

const Tabs = () => {
    return (
        <div className="tabs__wrapper">
            <ul className="tabs">
                {tabsDetails.map(({ name, value }, index) => {
                    return <Tab name={name} value={value} key={index} />
                })}
            </ul>
        </div>
    )
}

export default Tabs
