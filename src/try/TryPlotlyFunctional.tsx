import React, { useState } from 'react';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';
import TableRenderers from 'react-pivottable/TableRenderers';
import Plot from 'react-plotly.js';
import createPlotlyRenderers from 'react-pivottable/PlotlyRenderers';

// create Plotly renderers via dependency injection
const PlotlyRenderers = createPlotlyRenderers(Plot);

// see documentation for supported input formats
const data = [['left', 'right'], ['value1a', 'value1b'], ['value2a', 'value2b']];

function TryPlotlyFunctional ({}) {
    const [state, setState] = useState<any>();

    return (
        <>
            <h1>Try Functional Plotly</h1>
            <PivotTableUI
                data={data}
                onChange={s => setState(s)}
                renderers={Object.assign({}, TableRenderers, PlotlyRenderers)}
                {...state}
            />
        </>
    );
}

export default TryPlotlyFunctional
