import React, { Dispatch, SetStateAction, useState, createContext } from 'react';
export interface IProviderProps {
    children?: any;
}

type AppContextState = {
    activeNotes: number[];
    activeChord: string[];
    rootNote: string,
    keys: Array<{
        name: string,
        value: string,
        isWhite: boolean
    }>
}

type AppContextValue = {
    state: AppContextState;
    // type, you get when hovering over `setState` from `useState`
    setState: Dispatch<SetStateAction<AppContextState>>;
};

const appCtxDefaultValue: AppContextValue = {
    state: {
        activeNotes: [],
        activeChord: [],
        rootNote: 'c',
        keys: [
            { name: 'c', value: 'c2', isWhite: true },
            { name: 'c#', value: 'cs2', isWhite: false },
            { name: 'd', value: 'd2', isWhite: true },
            { name: 'd#', value: 'ds2', isWhite: false },
            { name: 'e', value: 'e2', isWhite: true },
            { name: 'f', value: 'f2', isWhite: true },
            { name: 'f#', value: 'fs2', isWhite: false },
            { name: 'g', value: 'g2', isWhite: true },
            { name: 'g#', value: 'gs2', isWhite: false },
            { name: 'a', value: 'a2', isWhite: true },
            { name: 'a#', value: 'as2', isWhite: false },
            { name: 'b', value: 'b2', isWhite: true },

            { name: 'c', value: 'c3', isWhite: true },
            { name: 'c#', value: 'cs3', isWhite: false },
            { name: 'd', value: 'd3', isWhite: true },
            { name: 'd#', value: 'ds3', isWhite: false },
            { name: 'e', value: 'e3', isWhite: true },
            { name: 'f', value: 'f3', isWhite: true },
            { name: 'f#', value: 'fs3', isWhite: false },
            { name: 'g', value: 'g3', isWhite: true },
            { name: 'g#', value: 'gs3', isWhite: false },
            { name: 'a', value: 'a3', isWhite: true },
            { name: 'a#', value: 'as3', isWhite: false },
            { name: 'b', value: 'b3', isWhite: true },
        ]
    },
    setState: state => { } // noop default callback
};

export const AppContext = createContext(appCtxDefaultValue);

export const AppProvider = (props: IProviderProps) => {
    const [state, setState] = useState(appCtxDefaultValue.state);

    return (
        <AppContext.Provider value={{ state, setState }}>
            {props.children}
        </AppContext.Provider>
    );
};