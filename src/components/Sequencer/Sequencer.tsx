import * as React from 'react';
import './Sequencer.scss';
import Chord from './Chord';
import ChordSvg from './ChordSvg';
import PanelSequencer from '../Panel/PanelSequencer';
import { createScale, checkIsInScale, createChord } from '../../functions/functions';
import { chordsRomanMajor } from '../../constants/chords';

export default function Sequencer() {
    return (
        <div>
            <PanelSequencer />
            <div className="sequencer">
                <Chord name={'I'} />
                <Chord name={'V'} />
                <Chord name={'vi'} />
                <Chord name={'IV'} />
            </div>
            <ul className="chord-list">
                {chordsRomanMajor.map(({ name, notes, suffix }, index) => {
                    return <ChordSvg key={index} fill={notes} name={name} chords={chordsRomanMajor} suffix={suffix} />
                })}

            </ul>
        </div>
    );
}