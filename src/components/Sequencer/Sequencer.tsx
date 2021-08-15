import * as React from 'react';
import './Sequencer.scss';
import Chord from './Chord';
import ChordSvg from './ChordSvg';
import ChordSvgScale from './ChordSvgScale';
import PanelSequencer from '../Panel/PanelSequencer';
import { createScale, checkIsInScale, createChord } from '../../functions/functions';
import { chordsRomanMajor, chordVariations } from '../../constants/chords';
import { AppContext } from '../../contexts/AppContext';

export default function Sequencer() {
    const { state, setState } = React.useContext(AppContext);
    const { rootNote, scaleType, chordsInScale } = state;

    React.useEffect(() => {
        const currentScale = createScale(scaleType, rootNote)
        const chordsFromScaleNotes = currentScale?.map((note) =>
            chordVariations.map(({ suffix }) => createChord(suffix, note)))
        if (chordsFromScaleNotes && currentScale) {
            const flattenedArr = Array.prototype.concat.apply([], chordsFromScaleNotes);
            const chordsScale = flattenedArr.filter(chord => checkIsInScale(currentScale, chord.notes))
            setState(prevState => {
                return {
                    ...prevState,
                    chordsInScale: chordsScale
                }
            })
        }
    }, [scaleType, rootNote]);


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
                {/* {chordsRomanMajor.map(({ name, notes, suffix }, index) => {
                    return <ChordSvg key={index}
                        fill={notes}
                        name={name}
                        chords={chordsRomanMajor}
                        suffix={suffix} />
                })} */}

                {chordsInScale.map((chord, index) => {
                    return <ChordSvgScale key={index}
                        fill={chord.notes}
                        suffix={chord.suffix} />
                })}

            </ul>
        </div>
    );
}