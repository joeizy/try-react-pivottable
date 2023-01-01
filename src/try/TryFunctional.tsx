import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';

// both work
// const data = [['left', 'right'], ['value1a', 1], ['value2a', 2]];
const data = [
    { left: 'value1a', right: 1},
    { left: 'value2a', right: 2}
];

function TryFunctional({}) {
    const [state, setState] = useState<any>({
        rows: ['right'],
        cols: ['left'],
        aggregatorName: 'Sum',
        vals: ['right'],
        rendererName: 'Table Heatmap'
    })

    function setWithLog(newState:any) {
        console.log(newState)
        setState(newState)
    }

    return (
        <>
            <h1>Try Functional</h1>
            <PivotTableUI
                data={data}
                onChange={s => setWithLog(s)}
                {...state}
            />
        </>
    );
}

export default TryFunctional
