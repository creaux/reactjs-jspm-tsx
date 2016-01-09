import * as React from 'react';
import * as moment from 'moment';

export function currency(value) {
    return value.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
}

export function dateFormat(value) {
    return moment.default(new Date(value)).format('Do MMMM YYYY');
}