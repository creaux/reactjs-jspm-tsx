import * as React from 'react';
import { Panel, Table } from 'react-bootstrap';
import { currency, dateFormat } from './../helpers/i18n';

//TODO: To Parent file like Stores
export default class Summary extends React.Component {

    static defaultProps = {
        total: 0,
        period: {
            from: '01-01-2000',
            to: '01-01-2001'
        }
    };

    get price() {
        return this.props.total;
    }

    get vat() {
        return 0.2;
    }

    get total() {
        return this.vatPrice + this.price;
    }

    get vatPrice() {
        return this.price * this.vat;
    }

    get from() { //TODO: Test
        //noinspection TypeScriptValidateTypes
        return dateFormat(this.props.period.from);
    }

    get to() {
        //noinspection TypeScriptValidateTypes
        return dateFormat(this.props.period.to);
    }

    get generated() {
        //noinspection TypeScriptValidateTypes
        return dateFormat(this.props.generated);
    }

    get due() {
        //noinspection TypeScriptValidateTypes
        return dateFormat(this.props.due);
    }

    get panelHeader() {
        return (
            <h3>Summary<small> valid from { this.from } till { this.to }</small></h3>
        )
    }

    get panelFooter() {
        return (
            <h4>Total<small className="pull-right">{ currency(this.total) }</small></h4>
        )
    }

    render() {
        return (
            <Panel header={this.panelHeader} bsStyle="primary" footer={this.panelFooter} eventKey="1">
                <Table striped fill>
                    <tbody>
                        <tr>
                            <td>Price (VAT excl.)</td>
                            <td>{currency(this.price)}</td>
                        </tr>
                        <tr>
                            <td>VAT {this.vat*100}%</td>
                            <td>{currency(this.vatPrice)}</td>
                        </tr>
                    </tbody>
                </Table>
            </Panel>
        )
    }

}

export let __hotReload = true;