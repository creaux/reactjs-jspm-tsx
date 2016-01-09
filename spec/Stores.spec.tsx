/// <reference path="./../typings/tsd.d.ts "/>

import Stores from './../src/app/components/Stores';
import { StoresExpeditures, StoresSummary } from './../src/app/components/Stores';
import * as React from 'react';
import * as ReactTestUtils from 'react/lib/ReactTestUtils';
import set = Reflect.set;

describe('Stores', () => {

    describe('Class', () => {

        let stores,
            data = {
                rentals: [],
                buyAndKeep: [],
                total: 0
            };

        beforeEach(() => {
            stores = ReactTestUtils.renderIntoDocument(<Stores />);
        });

        it('should be possible to instantiate Stores', () => {
            expect(stores).toBeTruthy();
        });

        it('should be possible to get initial props as follows', () => {
            expect(stores.props).toEqual({ data: data });
        });

    });

    describe('props', () => {

        let stores,
            data = {
                rentals: [
                    { "title": "50 Shades of Grey", "cost": 4.99 }
                ],
                buyAndKeep: [
                    { "title": "That's what she said", "cost": 9.99 },
                    { "title": "Brokeback mountain", "cost": 9.99 }
                ],
                total: 3.33
            };

        beforeEach(() => {
            stores = ReactTestUtils.renderIntoDocument(<Stores data={ data } />);
        });

        afterEach(() => {
            stores = null;
        });

        it('should contain following object on init', () => {
            expect(stores.props).toEqual({ data: data });
        });

    });

    describe('stores', () => {

        let stores,
            data = {
                "rentals": [
                    { "title": "50 Shades of Grey", "cost": 4.99 }
                ],
                "buyAndKeep": [
                    { "title": "That's what she said", "cost": 9.99 },
                    { "title": "Brokeback mountain", "cost": 9.99 }
                ],
                "total": 24.97
            },
            storesTuples = [
                ["rentals", [
                    { "title": "50 Shades of Grey", "cost": 4.99 }
                ]],
                ["buyAndKeep", [
                    { "title": "That's what she said", "cost": 9.99 },
                    { "title": "Brokeback mountain", "cost": 9.99 }
                ]]
            ];

        beforeEach(() => {
            stores = ReactTestUtils.renderIntoDocument(<Stores data={ data } />);
        });

        afterEach(() => {
            stores = null;
        });

        it('should be possible to get filtered stores as tuples', () => { //TODO: With what?
            expect(stores.stores).toEqual(storesTuples);
        });

        it('should\'t be possible to set stores directly', () => {
            let storesFakeTuples = [
                ["rentals", [
                    { "title": "50 Shades of Fake", "cost": 0 }
                ]],
                ["buyAndKeep", [
                    { "title": "That's what she not said", "cost": 0.09 },
                    { "title": "Brokefake mountain", "cost": 0.09 }
                ]]
            ];
            function setStores() {
                stores.stores = storesFakeTuples;
            }
            expect(setStores).toThrowError('setting a property that has only a getter');
        });

    });

    describe('total', () => {

        let stores,
            total = 24.97,
            data = {
                total: total
            };

        beforeEach(() => {
            stores = ReactTestUtils.renderIntoDocument(<Stores data={ data } />);
        });

        afterEach(() => {
            stores = null;
        });

        it('should be possible to get total', () => { //TODO: With what?
            expect(stores.total).toEqual(total);
        });

        it('shouldn\'t be possible to set total', () => { //TODO: With what?
            function setTotal() {
                stores.total = 3.33;
            }
            expect(setTotal).toThrowError('setting a property that has only a getter');
        });

    });

});

describe('StoresExpeditures', () => {

    describe('Class', () => {

        let storesExpeditures,
            initialData = [];

        beforeEach(() => {
            storesExpeditures = ReactTestUtils.renderIntoDocument(<StoresExpeditures />);
        });

        it('should be possible to instantiate StoresExpeditures element', () => {
            expect(storesExpeditures).toBeTruthy();
        });

        it('should get initial value of props', () => {
            expect(storesExpeditures.props).toEqual({ stores: initialData });
        });

    });

    describe('props', () => {

        let storesExpeditures,
            dataTuples = [
                ["rentals", [
                    { "title": "50 Shades of Grey", "cost": 4.99 }
                ]],
                ["buyAndKeep", [
                    { "title": "That's what she said", "cost": 9.99 },
                    { "title": "Brokeback mountain", "cost": 9.99 }
                ]]
            ];

        beforeEach(() => {
            storesExpeditures = ReactTestUtils.renderIntoDocument(<StoresExpeditures stores={ dataTuples } />);
        });

        afterEach(() => {
            storesExpeditures = null;
        });

        it('should contain following object on init', () => {
            expect(storesExpeditures.props).toEqual({ stores: dataTuples });
        });

    });

    describe('stores', () => {

        let stores,
            total = 24.97,
            data = [
                ["rentals", [
                    { "title": "50 Shades of Grey", "cost": 4.99 }
                ]],
                ["buyAndKeep", [
                    { "title": "That's what she said", "cost": 9.99 },
                    { "title": "Brokeback mountain", "cost": 9.99 }
                ]]
            ];

        beforeEach(() => {
            stores = ReactTestUtils.renderIntoDocument(<StoresExpeditures stores={ data } />);
        });

        afterEach(() => {
            stores = null;
        });

        it('should be possible to get stores', () => { //TODO: With what?
            expect(stores.stores).toEqual(data);
        });

        it('shouldn\'t be possible to set stores', () => { //TODO: With what?
            function setStores() {
                stores.stores = 3.33;
            }
            expect(setStores).toThrowError('setting a property that has only a getter');
        });

    });

});

describe('StoresSummary', () => {

    describe('Class', () => {

        let storesSummary;

        beforeEach(() => {
            storesSummary = ReactTestUtils.renderIntoDocument(<StoresSummary />);
        });

        it('should be possible to instantiate StoresExpeditures element', () => {
            expect(storesSummary).toBeTruthy();
        });

        it('should get initial value of props', () => {
            expect(storesSummary.props).toEqual({ total: 0 });
        });

    });

    describe('props', () => {

        let storesSummary,
            total = 24.97,
            data = {
                total: total
            };

        beforeEach(() => {
            storesSummary = ReactTestUtils.renderIntoDocument(<StoresSummary total={ total } />);
        });

        afterEach(() => {
            storesSummary = null;
        });

        it('should contain following object on init', () => {
            expect(storesSummary.props).toEqual(data);
        });

    });

    describe('total', () => {

        let storesSummary,
            total = 24.97,
            data = {
                total: total
            };

        beforeEach(() => {
            storesSummary = ReactTestUtils.renderIntoDocument(<StoresSummary total={ total } />);
        });

        afterEach(() => {
            storesSummary = null;
        });

        it('should be possible to get total', () => { //TODO: With what?
            expect(storesSummary.total).toEqual(total);
        });

        it('shouldn\'t be possible to set total', () => { //TODO: With what?
            function setStoresSummary() {
                storesSummary.total = 3.33;
            }
            expect(setStoresSummary).toThrowError('setting a property that has only a getter');
        });

    });

});