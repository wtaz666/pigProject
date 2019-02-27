import React, { Component } from 'react';
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';

class AreaComponent extends Component {
    componentDidMount () {
        let { AreaData } = this.props;
        var dv = new DataSet.View().source(AreaData);
        dv.transform({
            type: 'fold',
            fields: ['ACME', 'Compitor'],
            key: 'type',
            value: 'value'
        });
        var chart = new G2.Chart({
            container: 'mountNode',
            forceFit: true,
            height: 250,
            padding:[30, 40, 'auto', 40]
        });
        chart.source(dv, {
            value: {
            formatter: function formatter(val) {
                return val;
            }
            },
            year: {
            range: [0, 1]
            }
        });
        chart.tooltip({
            crosshairs: true
        });
        chart.area().position('year*value').color('type').shape('smooth');
        chart.line().position('year*value').color('type').size(2).shape('smooth');
        chart.render();
    }
    render() {
        return <div id="mountNode"></div>
    }
}

export default AreaComponent;