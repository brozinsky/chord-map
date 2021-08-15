import { chordVariations } from '../constants/chords'
import { scales } from '../constants/scales'
import { notes } from '../constants/notes'

const rootNoteError = "Input note does not include 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'"

export const arrangeNotesByRoot = (rootNote: string) => {
    const rootIndex = notes.indexOf(rootNote)
    const notesRootFirst = notes.slice(rootIndex, notes.length).concat(notes.slice(0, rootIndex))
    return notesRootFirst
}

export const createScale = (scaleType: string, rootNote: string) => {
    const scaleObj = scales.find(scale => scale.name === scaleType)
    if (notes.includes(rootNote) && scaleObj !== undefined) {
        const scaleNotes = scaleObj.notes
        const notesRootFirst = arrangeNotesByRoot(rootNote)
        const scale = scaleNotes.map(i => notesRootFirst[i - 1])
        return scale as string[]
    } else if (!notes.includes(rootNote)) {
        console.error(rootNoteError)
    } else if (scaleObj === undefined) {
        console.error("Scale name is incorrect")
    }
}

export const createChord = (chordSuffix: string, rootNote: string) => {
    const chordObj = chordVariations.find(chord => chord.suffix === chordSuffix)
    if (notes.includes(rootNote) && chordObj !== undefined) {
        const chordNotes = chordObj.notes
        const notesRootFirst = arrangeNotesByRoot(rootNote)
        const chord = chordNotes.map(i => notesRootFirst[i - 1])
        return { notes: chord, suffix: chordSuffix }
    } else if (!notes.includes(rootNote)) {
        console.error(rootNoteError)
    } else if (chordObj === undefined) {
        console.error("Chord name is incorrect")
    }
}

export const checkIsInScale = (scaleArr: string[], chordArr: string[]) =>
    chordArr.every(note => scaleArr.includes(note));

// export const checkIsInScale = (scaleArr: string[], chordArr: string[]) =>
//     scaleArr.every(note => chordArr.includes(note));