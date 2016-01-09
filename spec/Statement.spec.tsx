/// <reference path="./../typings/tsd.d.ts "/>

import Statement from './../src/app/components/Statement';
import * as React from 'react';
import * as ReactTestUtils from 'react/lib/ReactTestUtils';

describe('Statement', () => {

    let billDefault = {
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
    };

    let bill = {
        statement: {
            "generated": "2000-01-01",
            "due": "2000-01-01",
            "period": {
                "from": "2000-01-01",
                "to": "2000-01-01"
            }
        },
        total: 3.33,
        package: {
            subscriptions: [],
            total: 3.33
        },
        callCharges: {
            "calls": [],
            "total": 2.22
        },
        skyStore: {
            "rentals": [
                { "title": "50 Shades of Grey", "cost": 4.99 }
            ],
            "buyAndKeep": [
                { "title": "That's what she said", "cost": 9.99 },
                { "title": "Brokeback mountain", "cost": 9.99 }
            ],
            "total": 5
        }
    };

    describe('Class', () => {

        let statement;

        beforeEach(() => {
            statement = ReactTestUtils.renderIntoDocument(<Statement />);
        });

        afterEach(() => {
            statement = null;
        });

        it('should be possible to create Statement element', () => {
            expect(statement).toBeTruthy();
        });

        it('should contain props with following default values', () => {
            expect(statement.props).toEqual({
                bill: billDefault
            });
        });

    });

    describe('props', () => {

        let statement,
            bill;

        beforeEach(() => {
            statement = ReactTestUtils.renderIntoDocument(<Statement bill={ billDefault } />);
        });

        afterEach(() => {
            statement = null;
        });

        it('should contain following object on init', () => {
            expect(statement.props).toEqual({ bill: billDefault });
        });

    });

    describe('total', () => {

        let statement;

        beforeEach(() => {
            statement = ReactTestUtils.renderIntoDocument(<Statement bill={ bill } />);
        });

        afterEach(() => {
            statement = null;
        });

        it('should be possible to get', () => {
            expect(statement.total).toEqual(bill.total);
        });

        it('should not be possible to set total directly', () => {
            function setStatement() {
                statement.total = '10.01';
            }
            expect(setStatement).toThrowError('setting a property that has only a getter');
        });

    });

    describe('package', () => {

        let statement;

        beforeEach(() => {
            statement = ReactTestUtils.renderIntoDocument(<Statement bill={ bill } />);
        });

        afterEach(() => {
            statement = null;
        });

        it('should be possible to get package', () => {
            expect(statement.package).toEqual(bill.package);
        });

        it('should not be possible to set package directly', () => {
            function setPackage() {
                statement.package = '10.01';
            }
            expect(setPackage).toThrowError('setting a property that has only a getter');
        });

    });

    describe('callCharges', () => {

        let statement;

        beforeEach(() => {
            statement = ReactTestUtils.renderIntoDocument(<Statement bill={ bill } />);
        });

        afterEach(() => {
            statement = null;
        });

        it('should be possible to get callCharges', () => {
            expect(statement.callCharges).toEqual(bill.callCharges);
        });

        it('should not be possible to set callCharges directly', () => {
            function setCallCharges() {
                statement.callCharges = {
                    "calls": [1,2,3],
                    "total": 5
                };
            }
            expect(setCallCharges).toThrowError('setting a property that has only a getter');
        });

    });

    describe('skyStore', () => {

        let statement;

        beforeEach(() => {
            statement = ReactTestUtils.renderIntoDocument(<Statement bill={ bill } />);
        });

        afterEach(() => {
            statement = null;
        });

        it('should be possible to get skyStore', () => {
            expect(statement.skyStore).toEqual(bill.skyStore);
        });

        it('should not be possible to set skyStore directly', () => {
            function setSkyStores() {
                statement.skyStore = {
                    "rentals": [4,5,6],
                    "buyAndKeep": [7],
                    "total": 6
                };
            }
            expect(setSkyStores).toThrowError('setting a property that has only a getter');
        });

    });

});
