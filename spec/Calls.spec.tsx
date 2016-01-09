/// <reference path="./../typings/tsd.d.ts "/>

import Calls from './../src/app/components/Calls';
import * as React from 'react';
import * as ReactTestUtils from 'react/lib/ReactTestUtils';

describe('Calls', () => {

    describe('Class', () => {

        let calls;

        beforeEach(() => {
            calls = ReactTestUtils.renderIntoDocument(<Calls />);
        });

        afterEach(() => {
            calls = null;
        });

        it('should be possible to create Package element', () => {
            expect(calls).toBeTruthy();
        });

        it('should contain props with following default values', () => {
            expect(calls.props).toEqual({
                calls: [],
                total: 0
            });
        });

    });

    describe('props', () => {

        let package;

        beforeEach(() => {
            package = ReactTestUtils.renderIntoDocument(<Calls calls={} total={} />);
        });

        afterEach(() => {
            package = null;
        });

        it('should contain following object on init', () => {
            expect(package.props).toEqual({
                calls: [],
                total: 0
            });
        });

    });

});