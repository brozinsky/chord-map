import * as React from 'react';
import './Sequencer.scss';

export interface IAppProps {
    name: string,
}

export default function Chord({ name }: IAppProps) {
    return (
        <button className="sequencer__chord">{name}</button>
    )
}