/// <reference path="./../typings/tsd.d.ts "/>

import Package from './../src/app/components/Package';
import { PackageList } from './../src/app/components/Package';
import * as React from 'react';
import * as ReactTestUtils from 'react/lib/ReactTestUtils';

//TODO: Test that Pounds are on UI

describe('Package', () => {

    //TODO: Test whether is possible to set PackageList properties throught Package

    describe('Class', () => {

        let package;

        beforeEach(() => {
            package = ReactTestUtils.renderIntoDocument(<Package />);
        });

        afterEach(() => {
            package = null;
        });

        it('should be possible to create Package element', () => {
            expect(package).toBeTruthy();
        });

        it('should contain props with following default values', () => {
            expect(package.props).toEqual({ //TODO: Add total
                package: {
                    subscriptions: [],
                    total: 0
                }
            });
        });

    });

    describe('props', () => {

        let package,
            subscriptions = [
                { "type": "tv", "name": "Variety with Movies HD", "cost": 50.00 },
                { "type": "talk", "name": "Sky Talk Anytime", "cost": 5.00 },
                { "type": "broadband", "name": "Fibre Unlimited", "cost": 16.40 }
            ],
            total = 3.33;

        beforeEach(() => {
            package = ReactTestUtils.renderIntoDocument(<Package package={ {
                subscriptions: subscriptions,
                total: total
            } } />);
        });

        //TODO: Add test for test whole props
        //TODO: Put his out of this describe it should be part of each property
        it('should be possible render with subscriptions', () => {
            expect(package.subscriptions).toEqual(subscriptions);
        });

        it('shouldn\'t be possible to set subscriptions', () => {
            function setSubscriptions() {
                package.subscriptions = { "type": "fake", "name": "Fake Unlimited", "cost": 0 };
            }
            expect(setSubscriptions).toThrowError('setting a property that has only a getter');
        });

        it('should be possible render with total', () => {
            expect(package.total).toEqual(total);
        });

        it('shouldn\'t be possible to set total', () => {
            function setTotal() {
                package.total = 0.01;
            }
            expect(setTotal).toThrowError('setting a property that has only a getter');
        });

    });

});

describe('PackagesList', () => {

    describe('Class', () => {

        let packageList;

        beforeEach(() => {
            packageList = ReactTestUtils.renderIntoDocument(<PackageList />);
        });

        afterEach(() => {
            packageList = null;
        });

        it('should be possible to create PackageList element', () => {
            expect(packageList).toBeTruthy();
        });

        it('should contain props with following default values', () => {
            expect(packageList.props).toEqual({
                subscriptions: []
            });
        });

    });

    describe('props', () => {

        let packageList,
            subscriptions;

        beforeEach(() => {
            subscriptions = [
                { "type": "tv", "name": "Variety with Movies HD", "cost": 50.00 },
                { "type": "talk", "name": "Sky Talk Anytime", "cost": 5.00 },
                { "type": "broadband", "name": "Fibre Unlimited", "cost": 16.40 }
            ];
            packageList = ReactTestUtils.renderIntoDocument(<PackageList subscriptions={ subscriptions } />);
        });

        it('should contain following object on init', () => {
            expect(packageList.props).toEqual({ subscriptions: subscriptions });
        });

    });

    describe('subscriptions', () => {

        let packageList,
            subscriptions;

        beforeEach(() => {
            subscriptions = [
                { "type": "tv", "name": "Variety with Movies HD", "cost": 50.00 },
                { "type": "talk", "name": "Sky Talk Anytime", "cost": 5.00 },
                { "type": "broadband", "name": "Fibre Unlimited", "cost": 16.40 }
            ];
            packageList = ReactTestUtils.renderIntoDocument(<PackageList subscriptions={ subscriptions } />);
        });

        it('should should be possible to get subscriptions', () => {
            expect(packageList.subscriptions).toEqual(subscriptions);
        });

        it('should not be possible to set subscriptions directly', () => {
            function setSubscription() {
                packageList.subscriptions = [
                    { "type": "fake", "name": "Variety with Fake HD", "cost": 0.01 }
                ];
            }
            expect(setSubscription).toThrowError('setting a property that has only a getter');
        });

    });

});
