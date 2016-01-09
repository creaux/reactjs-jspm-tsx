import * as React from 'react';
import { Panel, Tabs, Tab, Table } from 'react-bootstrap';
import * as _ from 'underscore';
import { currency } from './../helpers/i18n';

export default class Stores extends React.Component {

    static defaultProps = {
        data: {
            rentals: [],
            buyAndKeep: [],
            total: 0
        }
    };

    get stores() {
        return this.tuples.filter(store => {
            return _.isArray(store[1])
        });
    }

    private get tuples() {
        return _.pairs(this.props.data);
    }

    get total() {
        return this.props.data.total;
    }

    get panelHeader() {
        return (
            <h3>Sky Stores Expeditures</h3>
        )
    }

    render() {
        return (
            <div className="stores">
                <Panel header={this.panelHeader} bsStyle="info">
                    <StoresExpeditures stores={this.stores} />
                    <StoresSummary total={currency(this.total)} />
                </Panel>
            </div>
        )
    }

}

export class StoresExpeditures extends React.Component {

    static defaultProps = {
        stores: []
    };

    get stores() {
        return this.props.stores;
    }

    render() {
        return (
            <div className="stores-expeditures">
                <Tabs defaultActiveKey={0}>
                    {
                        this.props.stores.map((store, i) => {
                        return (
                            <Tab eventKey={i} title={store[0]} key={i}>
                                <Table striped>
                                    <thead>
                                        <tr>
                                            <th colSpan="2"><h3>{store[0]}</h3></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            store[1].map((expediture, a) => {
                                                return (
                                                <tr key={a}>
                                                    <td>{expediture.title}</td>
                                                    <td>{currency(expediture.cost)}</td>
                                                </tr>
                                                    )
                                                })
                                            }
                                    </tbody>
                                </Table>
                            </Tab>
                        )
                    })
                }
                </Tabs>
            </div>
        )
    }
}

export class StoresSummary extends React.Component {

    static defaultProps = {
        total: 0
    };

    get total() {
        return this.props.total;
    }

    render() {
        return (
            <div className="stores-summary">
                <Table striped>
                    <thead>
                        <tr>
                            <th colSpan="2"><h4>Total</h4></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>VAT excl.</td>
                            <td>{currency(this.total)}</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }

}