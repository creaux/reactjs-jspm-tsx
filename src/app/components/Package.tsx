import * as React from 'react';
import { Panel, Tabs, Tab, Table } from 'react-bootstrap';
import './Package.less!';
import { currency } from './../helpers/i18n';

export default class Package extends React.Component {

    static defaultProps = {
        package: {
            subscriptions: [],
            total: 0
        }
    };

    get subscriptions() {
        return this.props.package.subscriptions;
    }

    get total() {
        return this.props.package.total;
    }

    get panelHeader() {
        return (
            <div>
                <h3>Package</h3>
                {
                    this.subscriptions.map( (subscription, index) => {
                        return (
                            <Tab eventKey={index} title={subscription.type} key={index}>

                            </Tab>
                        )
                    })
                }
            </div>
        )
    }

    get panelFooter() {
        return (
            <h4>Total<small className="pull-right">{ currency(this.total) }</small></h4>
        )
    }

    render() {
        return (
            <div className="package">
                <Panel header={this.panelHeader} footer={this.panelFooter} bsStyle="info" eventKey="2">
                    <PackageList subscriptions={this.subscriptions} />
                </Panel>
            </div>
        )
    }
}

export class PackageList extends React.Component {

    static defaultProps = {
        subscriptions: []
    };

    get subscriptions() {
        return this.props.subscriptions;
    }

    render() {
        return (
            <Tabs defaultActiveKey={0} fill>
                {
                    this.subscriptions.map( (subscription, index) => {
                        return (
                        <Tab eventKey={index} title={subscription.type} key={index}>
                            <Table striped>
                                <thead>
                                    <tr>
                                        <th colSpan="2"><h4>Related services</h4></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{subscription.name}</td>
                                        <td>{currency(subscription.cost)}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Tab>
                            )
                        })
                    }
            </Tabs>
        )
    }
}


export let __hotReload = true;
