import * as React from 'react';
import * as http from 'http';
import Statement from './Statement';

export default class Bill extends React.Component {

    url;
    bill;

    getBill() {

        let options = {
            hostname: this.url,
            port: 80,
            path: '/bill.json'
        };

        http.get(options, response => {
            response.on('data', data => {
                this.setState({bill: JSON.parse(data)});
            }).on('error', data => {
                console.log('Error');
            });
        })

    }

    componentDidMount() {
        this.getBill();
    }

    state = {
        statement: {},
        total: 0,
        package: {
            subscriptions: [],
            total: 0
        },
        callCharges: {
            calls: [],
            total: 0
        },
        skyStore: {
            rentals: [],
            buyAndKeep: [],
            total: 0
        }
    };

    constructor() {
        super();
        this.url = 'still-scrubland-9880.herokuapp.com';
    }

    render() {
        return (
            <div>
                <Statement bill={this.state.bill} />
            </div>
        )
    }

}

export let __hotReload = true;