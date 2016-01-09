import * as React from 'react';
import "./Statement.less!"
import Package from './Package';
import Summary from './Summary';
import Calls from './Calls';
import Stores from './Stores';
import { Panel, Table, PanelGroup } from 'react-bootstrap';

export default class Statement extends React.Component {

    static defaultProps = {
        bill: {
            statement: {
                "generated": "2000-01-01",
                "due": "2000-01-01",
                "period": {
                    "from": "2000-01-01",
                    "to": "2000-01-01"
                }
            },
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
        }
    };

    get total() {
        return this.props.bill.total;
    }

    get package() {
        return this.props.bill.package;
    }

    get callCharges() { //TODO: Test
        return this.props.bill.callCharges;
    }

    get callsTotal() { //TODO: Test
        return this.props.bill.callCharges.total;
    }

    get calls() {
        return this.props.bill.callCharges.calls;
    }

    get skyStore() {
        return this.props.bill.skyStore;
    }

    get period() {
        return this.props.bill.statement.period;
    }

    render() {
        return (
            <div className="statement">
                <div className="container">
                    <PanelGroup defaultActiveKey="2" accordion>
                        <h1>Bill Statement</h1>
                        <Summary total={this.total} period={this.period} />
                        <Package package={this.package} />
                        <Calls total={this.callsTotal} calls={this.calls} />
                        <Stores data={this.skyStore} />
                    </PanelGroup>
                </div>
            </div>
        )
    }

}

export let __hotReload = true;
