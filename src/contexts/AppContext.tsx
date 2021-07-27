import React, { Dispatch, SetStateAction, useState, createContext } from 'react';

// const ActiveNotesCtx = createContext({
//     activeNotes: [] as number[],
//     setActiveNotes: (activeNotes: number) => {},
//   });

// // export const ActiveNotesContext = createContext<number[]>([]);

// export const ActiveNotesProvider: React.FC = ({ children }) => {
//     // const [activeNotes, setActiveNotes] = useState<number[]>([]);

//     const [activeNotes, setActiveNotes] = useState<number[]>([]);

//     return (
//         <ActiveNotesCtx.Provider value={{activeNotes, setActiveNotes}}>
//             {children}
//         </ActiveNotesCtx.Provider>
//     );
// }

export interface IProviderProps {
    children?: any;
}

type AppContextState = {
    // isMenuOpen: boolean;
    // isSideOpen: boolean;
    activeNotes: number[]
}

type AppContextValue = {
    state: AppContextState;
    // type, you get when hovering over `setState` from `useState`
    setState: Dispatch<SetStateAction<AppContextState>>;
};

const appCtxDefaultValue: AppContextValue = {
    state: { activeNotes: [] },
    setState: state => { } // noop default callback
};

// const appCtxDefaultValue = {
//     // state: { isMenuOpen: false, isSideOpen: false },
//     state: { activeNotes: [] },
//     setState: (state: AppContextState) => { } // noop default callback
// };

export const AppContext = createContext(appCtxDefaultValue);

export const AppProvider = (props: IProviderProps) => {
    const [state, setState] = useState(appCtxDefaultValue.state);

    return (
        <AppContext.Provider value={{ state, setState }}>
            {props.children}
        </AppContext.Provider>
    );
};

