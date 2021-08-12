export const chordVariations: {
    notes: number[],
    suffix: string
}[] = [
        {
            notes: [1, 4, 8],
            suffix: 'min',
        },
        {
            notes: [1, 5, 8, 11],
            suffix: '7',
        },
        {
            notes: [1, 3, 8],
            suffix: 'sus2',
        },
        {
            notes: [1, 4, 8, 11],
            suffix: 'm7',
        },
        {
            notes: [1, 5, 9],
            suffix: '+',
        },
        {
            notes: [1, 6, 8],
            suffix: 'sus4',
        },
        {
            notes: [1, 5, 8, 12],
            suffix: 'maj7',
        },
        {
            notes: [1, 4, 7],
            suffix: '°',
        },
        {
            notes: [1, 8],
            suffix: '5',
        },
        {
            notes: [1, 5, 8, 11],
            suffix: '9',
        },
        {
            notes: [1, 3, 5, 8],
            suffix: '2',
        },
        {
            notes: [1, 5, 8, 11],
            suffix: '6',
        },
        {
            notes: [1, 4, 8, 11, 15],
            suffix: 'm9',
        },
        {
            notes: [1, 3, 5, 8],
            suffix: 'm2',
        },
        {
            notes: [1, 4, 8, 10],
            suffix: 'm6',
        },
        {
            notes: [1, 5, 8, 12, 15],
            suffix: 'maj9',
        }

    ]

export const chordsRomanMajor: {
    name: string,
    notes: number[],
    nextChord: string[],
    suffix: string,
    suffixes: string[]
}[] = [
        {
            name: 'I', notes: [1, 5, 8],
            nextChord: ['ii', 'iii', 'IV', 'V', 'vi', 'vii'],
            suffix: 'maj',
            suffixes: ['2', '6', 'M7', 'sus', 'M9']
        },
        {
            name: 'ii', notes: [3, 6, 10], nextChord: ['iii', 'V'],
            suffix: 'min',
            suffixes: ['m7', 'm9']
        },
        {
            name: 'iii', notes: [5, 8, 12], nextChord: ['IV', 'vi'],
            suffix: 'min',
            suffixes: ['7']
        },
        {
            name: 'IV', notes: [6, 10, 13], nextChord: ['I', 'ii', 'V'],
            suffix: 'maj',
            suffixes: ['6', 'M7', 'm', 'm6']
        },
        {
            name: 'V', notes: [8, 12, 15], nextChord: ['I', 'iii', 'vi',],
            suffix: 'maj',
            suffixes: ['7', '9', '11', 'sus', '13']
        },
        {
            name: 'vi', notes: [10, 13, 17], nextChord: ['ii', 'IV', 'vi'],
            suffix: 'min',
            suffixes: ['m7', 'm9']
        },
    ]

export const chordsMajor: {
    name: string,
    notes: number[],
    nextChord: string[],
    suffix: string
}[] = [
        {
            name: 'I', notes: [1, 5, 8],
            nextChord: ['ii', 'iii', 'IV', 'V', 'vi', 'vii'],
            suffix: 'maj',
        },
        {
            name: 'ii', notes: [3, 6, 10], nextChord: ['iii', 'V'],
            suffix: 'min',
        },
        {
            name: 'iii', notes: [5, 8, 12], nextChord: ['IV', 'vi'],
            suffix: 'min',
        },
        {
            name: 'IV', notes: [6, 10, 13], nextChord: ['I', 'ii', 'V'],
            suffix: 'maj',
        },
        {
            name: 'V', notes: [8, 12, 15], nextChord: ['I', 'iii', 'vi',],
            suffix: 'maj',
        },
        {
            name: 'vi', notes: [10, 13, 17], nextChord: ['ii', 'IV', 'vi'],
            suffix: 'min',
        },
    ]

export const chordsMinor: {
    name: string,
    notes: number[],
    nextChord: string[],
    suffix: string
}[] = [
        {
            name: 'i', notes: [1, 5, 8],
            nextChord: ['ii', 'iii', 'IV', 'V', 'vi', 'vii'],
            suffix: 'min',
        },
        {
            name: 'iidim', notes: [3, 6, 10], nextChord: ['iii', 'V'],
            suffix: 'dim',
        },
        {
            name: 'III', notes: [5, 8, 12], nextChord: ['IV', 'vi'],
            suffix: 'min',
        },
        {
            name: 'IV', notes: [6, 10, 13], nextChord: ['I', 'ii', 'V'],
            suffix: 'maj',
        },
        {
            name: 'v', notes: [8, 12, 15], nextChord: ['I', 'iii', 'vi',],
            suffix: 'maj',
        },
        {
            name: 'vi', notes: [10, 13, 17], nextChord: ['ii', 'IV', 'vi'],
            suffix: 'min',
        },
    ]