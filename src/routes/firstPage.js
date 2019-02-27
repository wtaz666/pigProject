import React, { Component } from 'react';
import Sales from '../components/firstPageSales/sales'
import Production from '../components/firstPageSales/production'


class One extends Component {
    render() {
        return (
            <div>
                <Sales></Sales>
                <Production></Production>
            </div>
        );
    }
}

export default One;