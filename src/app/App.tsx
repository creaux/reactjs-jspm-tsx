/// <reference path="../../typings/tsd.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as https from 'https';
import './Table.less!';
import './Grid.less!';
import './Panel.less!';
import Bill from './components/Bill';
import 'bootstrap-less/bootstrap/index.less!'

//TODO: Add React types everywhere types
//TODO: Add Typescript Types
//TODO: Test-Driven!
//TODO: Setup properly tsd

class App extends React.Component {

    public render() {
        return <div><Bill /></div>
    }

}

ReactDOM.render(<App />, document.getElementById('app'));

export let __hotReload = true;