import * as React from 'react';
import './Sequencer.scss';
import Chord from './Chord';

export default function Sequencer() {
    return (
        <div className="sequencer">
            <Chord name={'I'} />
            <Chord name={'V'} />
            <Chord name={'vi'} />
            <Chord name={'IV'} />
        </div>
    );
}