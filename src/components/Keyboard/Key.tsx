import * as React from 'react';
import { AppContext } from '../../contexts/AppContext';

export interface IAppProps {
    note: string,
    isWhite: boolean,
    number: number,
}

const Key = ({ note, isWhite, number }: IAppProps) => {
    const { state } = React.useContext(AppContext);
    const [isActive, setIsActive] = React.useState<boolean>(false);

    React.useEffect(() => {
        console.log(state.activeNotes.filter(note => note === number))
        if (state.activeNotes.filter(note => note === number).length > 0) {
            setIsActive(true)
            setTimeout(() => {
                setIsActive(false)
            }, 200);
        }
    }, [state])

    return (
        <button className={`keys__${note}
        ${isWhite ? 'keys__white' : 'keys__black'}
        ${isActive ? 'keys--active' : ''}
        `}></button>
    )
}

export default Key
