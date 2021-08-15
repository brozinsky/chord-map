import React from 'react'

const ChordSvgScale = ({ fill, suffix }) => {
    let fillNotes: {
        name: string,
        fill: string,
    }[] = [
            { name: 'c', fill: 'none', },
            { name: 'c#', fill: '#444', },
            { name: 'd', fill: 'none', },
            { name: 'd#', fill: '#444', },
            { name: 'e', fill: 'none', },
            { name: 'f', fill: 'none', },
            { name: 'f#', fill: '#444', },
            { name: 'g', fill: 'none', },
            { name: 'g#', fill: '#444', },
            { name: 'a', fill: 'none', },
            { name: 'a#', fill: '#444', },
            { name: 'b', fill: 'none', },

            { name: 'c', fill: 'none', },
            { name: 'c#', fill: '#444', },
            { name: 'd', fill: 'none', },
            { name: 'd#', fill: '#444', },
            { name: 'e', fill: 'none', },
            { name: 'f', fill: 'none', },
            { name: 'f#', fill: '#444', },
            { name: 'g', fill: 'none', },
            { name: 'g#', fill: '#444', },
            { name: 'a', fill: 'none', },
            { name: 'a#', fill: '#444', },
            { name: 'b', fill: 'none', },
        ]

    const fillColorFn = (noteType: string) => {
        switch (noteType) {
            case 'c':
                return '#75BCE0'
            case 'c#':
                return '#7593E0'
            case 'd':
                return '#DC7475'
            case 'd#':
                return '#F0C76A'
            case 'e':
                return '#EBED8F'
            case 'f':
                return '#75E08D'
            case 'f#':
                return '#BCE075'
            case 'g':
                return '#7E75E0'
            case 'g#':
                return '#BC75E0'
            case 'a':
                return '#75E0D9'
            case 'a#':
                return '#68A36A'
            case 'b':
                return '#E075BC'
        }
    }

    const fillColor = fillColorFn(fill[0])

    console.log(fillColor)

    let searchArr = fillNotes
    fill.forEach((note: string) => {
        let searchedNote = searchArr.find(obj => obj.name === note)
        let searchedNoteIndex = searchArr.findIndex(obj => obj.name === note)
        if (searchedNote !== undefined) {
            searchedNote.fill = fillColor!
        }
        // slice the array to find next note if duplicate
        searchArr = searchArr.slice(searchedNoteIndex, searchArr.length)
    })

    const rectData = [
        { id: 0, positionX: '0.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[0].fill },
        { id: 2, positionX: '9.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[2].fill },
        { id: 4, positionX: '18.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[4].fill },
        { id: 5, positionX: '27.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[5].fill },
        { id: 7, positionX: '36.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[7].fill },
        { id: 9, positionX: '45.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[9].fill },
        { id: 11, positionX: '54.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[11].fill },

        { id: 12, positionX: '63.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[12].fill },
        { id: 14, positionX: '72.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[14].fill },
        { id: 16, positionX: '81.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[16].fill },
        { id: 17, positionX: '90.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[17].fill },
        { id: 19, positionX: '99.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[19].fill },
        { id: 21, positionX: '108.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[21].fill },
        { id: 23, positionX: '117.1', positionY: '6.1', width: '8.8', height: '28.8', fill: fillNotes[23].fill },

        { id: 1, positionX: '7', positionY: '6', width: '4', height: '18', fill: fillNotes[1].fill },
        { id: 3, positionX: '16', positionY: '6', width: '4', height: '18', fill: fillNotes[3].fill },
        { id: 6, positionX: '34', positionY: '6', width: '4', height: '18', fill: fillNotes[6].fill },
        { id: 8, positionX: '43', positionY: '6', width: '4', height: '18', fill: fillNotes[8].fill },
        { id: 10, positionX: '52', positionY: '6', width: '4', height: '18', fill: fillNotes[10].fill },

        { id: 13, positionX: '70', positionY: '6', width: '4', height: '18', fill: fillNotes[13].fill },
        { id: 15, positionX: '79', positionY: '6', width: '4', height: '18', fill: fillNotes[15].fill },
        { id: 18, positionX: '88', positionY: '6', width: '4', height: '18', fill: fillNotes[18].fill },
        { id: 20, positionX: '106', positionY: '6', width: '4', height: '18', fill: fillNotes[20].fill },
        { id: 22, positionX: '115', positionY: '6', width: '4', height: '18', fill: fillNotes[22].fill },
    ]

    const chordName = fill[0] + suffix

    return (
        <li className="chord-list__item">
            <svg width="220" height="72" viewBox="0 0 126 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                {rectData.map(({ id, positionX, positionY, width, height, fill }) => {
                    return <rect key={id} x={positionX} y={positionY} width={width} height={height} fill={fill} stroke="#444" strokeWidth="0.2" />
                })}
            </svg>
            {chordName}
        </li>
    )
}

export default ChordSvgScale