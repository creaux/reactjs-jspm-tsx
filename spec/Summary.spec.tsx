/// <reference path="./../typings/tsd.d.ts "/>

import Summary from './../src/app/components/Summary';
import * as React from 'react';
import * as ReactTestUtils from 'react/lib/ReactTestUtils';

describe('Summary', () => { //TODO: BDD Testing????

    describe('class', () => {

        let summary;

        beforeEach(() => {
            summary = ReactTestUtils.renderIntoDocument(<Summary />);
        });

        afterEach(() => {
            summary = null;
        });

        it('shoudl be possible to create Summary', function() {
            expect(summary).toBeTruthy();
        });

        it('should have price property', function() {
            expect(summary.price).toBeDefined();
        });

        it('should have vat property', function() {
            expect(summary.vat).toBeDefined();
        });

        it('should have total property', function() {
            expect(summary.total).toBeDefined();
        });

        it('should have total property', function() {
            expect(summary.vatPrice).toBeDefined();
        });

    });

    describe('property price', () => {

        it('should be 0 after initialization', function() {
            let summary = ReactTestUtils.renderIntoDocument(<Summary />);
            expect(summary.price).toEqual(0);
        });

        it('should be custom after initialization with value', () => {
            let summary = ReactTestUtils.renderIntoDocument(<Summary total={3} />);
            expect(summary.price).toEqual(3);
        });

        it('shouldn\'t be possible to set price directly', () => {
            let summary = ReactTestUtils.renderIntoDocument(<Summary total={3} />);
            function setPrice() {
                summary.price = 2;
            }
            expect(setPrice).toThrowError('setting a property that has only a getter');
        });

    });

    describe('property vat', () => {

        let summary;

        beforeEach(() => {
            summary = ReactTestUtils.renderIntoDocument(<Summary />);
        });

        afterEach(() => {
           summary = null
        });

        it('should get static value 0.2', () => {
            expect(summary.vat).toEqual(0.2);
        });

        it('shouldn\'t be possible to overwrite vat directly', () => {
            function setVat() {
                summary.vat = 1;
            }
            expect(setVat).toThrowError('setting a property that has only a getter');
        });

    });

    describe('property total', () => {

        let summary;

        beforeEach(() => {
            summary = ReactTestUtils.renderIntoDocument(<Summary total={3} />);
        });

        afterEach(() => {
            summary = null;
        });

        it('should be possible to get total price', () => {
            expect(summary.total).toEqual(3 * 0.2 + 3);
        });

        it('shouldn\'t be possible to set total price', () => {
            function setTotal() {
                summary.total = 10;
            }
            expect(setTotal).toThrowError('setting a property that has only a getter');
        });

    });

    describe('property vatPrice', () => {

        let summary;

        beforeEach(() => {
            summary = ReactTestUtils.renderIntoDocument(<Summary total={3} />);
        });

        afterEach(() => {
            summary = null;
        });

        it('should be possible to get vatPrice', () => {
            expect(summary.vatPrice).toEqual(3 * 0.2);
        });

        it('shouldn\'t be possible to set vatPrice', () => {
            function setVatPrice() {
                summary.vatPrice = 10;
            }
            expect(setVatPrice).toThrowError('setting a property that has only a getter');
        });

    });

});