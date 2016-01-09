import * as React from 'react';
import { Table, Panel, Pagination } from 'react-bootstrap';
import { currency } from './../helpers/i18n';
import * as _ from 'underscore';

export default class Calls extends React.Component {

    static defaultProps = {
        calls: [],
        total: 0
    };

    get total() {
        return this.props.total;
    }

    get calls() {
        return this.props.calls;
    }

    private get panelHeader() {
        return (
            <h3>Telephone <small>list of calls for last month</small></h3>
        )
    }

    // THIS IS JUST FOR ILLUSTRATION
    get pages() {
        return _.chain(this.calls).groupBy(function(element, index){
            return Math.floor(index/5);
        }).toArray().value();
    }

    get page() {
        return this.pages[this.state.page];
    }

        selectPage(event, selectedEvent) {
            event.preventDefault();
            this.setState({
                page: selectedEvent.eventKey
            });
    };

    state = {
        page: 0
    };

    render() {
        return (
            <div className="calls">
                <Panel header={this.panelHeader} bsStyle="info">
                    <Table striped fill>
                        <thead>
                            <tr>
                                <th colSpan="2"><h4>Total</h4></th>
                                <th>{currency(this.total)}</th>
                            </tr>
                        </thead>
                        <tbody>
                            {(() => {
                                if(this.page) {
                                    return this.page.map((call, index)=> {
                                        return (
                                            <tr key={index}>
                                                <td>{call.called}</td>
                                                <td>{call.duration}</td>
                                                <td>{currency(call.cost)}</td>
                                            </tr>
                                        )
                                    })
                                }
                            })()}
                        </tbody>
                    </Table>
                    <div className="text-center">
                        <Pagination
                            prev
                            next
                            first
                            last
                            bsSize="medium"
                            items={5}
                            activePage={this.state.page}
                            onSelect={this.selectPage.bind(this)} />
                    </div>
                </Panel>
            </div>
        )
    }
}

export let __hotReload = true;