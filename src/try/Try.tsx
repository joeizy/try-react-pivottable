import React from 'react';
import ReactDOM from 'react-dom';
import PivotTableUI from 'react-pivottable/PivotTableUI';
import 'react-pivottable/pivottable.css';

// see documentation for supported input formats
const data = [['left', 'right'], ['value1a', 'value1b'], ['value2a', 'value2b']];

class TryApp extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <>
                <h1>Hello from Joe</h1>
                <PivotTableUI
                    data={data}
                    onChange={s => this.setState(s)}
                    {...this.state}
                />
            </>
        );
    }
}

export default TryApp
