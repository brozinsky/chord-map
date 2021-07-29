import * as React from 'react';
import './Panel.scss';
import { AppContext } from '../../contexts/AppContext';

const keys: string[] = ['c2', 'cs2', 'd2', 'ds2', 'e2', 'f2', 'fs2', 'g2', 'gs2', 'a2', 'as2', 'b2',
    'c3', 'cs3', 'd3', 'ds3', 'e3', 'f3', 'fs3', 'g3', 'gs3', 'a3', 'as3', 'b3']

const keysRoot = [{ name: 'c', value: 'c' },
{ name: 'c#', value: 'cs' }, { name: 'd', value: 'd' },
{ name: 'd#', value: 'ds' }, { name: 'e', value: 'e' },
{ name: 'f', value: 'f' }, { name: 'f#', value: 'fs' },
{ name: 'g', value: 'g' }, { name: 'g#', value: 'gs' },
{ name: 'a', value: 'a' }, { name: 'a#', value: 'as' },
{ name: 'b', value: 'b' }]


export default function Panel() {
    const { state, setState } = React.useContext(AppContext);

    const [rootNote, setRootNote] = React.useState('c')

    // const root = React.useRef<HTMLSelectElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // setRootNote(event.target.value.trim())

        setState(prevState => {
            return {
                ...prevState,
                rootNote: event.target.value
            }
        })
    }

    return (
        <div className="panel">
            <form action="/action_page.php">
                <label htmlFor="root">
                    Root
                    <select
                        // ref={root}
                        value={state.rootNote}
                        onChange={handleChange}
                        name="root">
                        {keysRoot.map(({ value, name }) => {
                            return <option value={value}>
                                {name}
                            </option>
                        })}
                    </select>
                </label>
            </form>

            {/* <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Root</InputLabel>
                <NativeSelect
                    className={classes.selectEmpty}
                    id="demo-simple-select-filled"
                    value={'cs'}
                    onChange={handleChange}
                >
                    {keys.map((key) => {
                        return <option value={key}>{key}</option>
                    })}
                </NativeSelect>
            </FormControl> */}
        </div>
    )
}