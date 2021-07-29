import * as React from 'react';
import { AppContext } from '../../contexts/AppContext';
export interface IAppProps {
    note: string,
    isWhite: boolean,
    value: string
}

const Key = ({ note, isWhite, value }: IAppProps) => {
    const { state } = React.useContext(AppContext);
    const [isActive, setIsActive] = React.useState<boolean>(false);

    React.useEffect(() => {
        if (state.activeChord.filter(note => note === value).length > 0) {
            setIsActive(true)
            setTimeout(() => {
                setIsActive(false)
            }, 200);
        }
    }, [state])

    return (
        <>
            <button className={`keys__${note}
        ${isWhite ? 'keys__white' : 'keys__black'}
        ${isActive ? 'keys--active' : ''}
        `}>{note}</button>
        </>
    )
}

export default Key
