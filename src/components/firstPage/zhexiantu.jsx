import React, { Component } from 'react';
import G2 from '@antv/g2';
import '../../assets/css/style.css';
class Zhexiantu extends Component {
    componentDidMount() {
        let {
            data
        } = this.props;
        var chartT = new G2.Chart({
            container: 'mountNodeT',
            forceFit: true,
            height: 250,
            padding: [30, 40, 'auto', 40]
        });
        chartT.source(data, {
            month: {
                range: [0, 1]
            }
        });
        chartT.tooltip({
            crosshairs: {
                type: 'line'
            }
        });
        chartT.axis('temperature', {
            label: {
                formatter: function formatter(val) {
                    return val;
                }
            }
        });
        chartT.line().position('month*temperature').color('city');
        chartT.point().position('month*temperature').color('city').size(4).shape('circle').style({
            stroke: '#fff',
            lineWidth: 1
        });
        chartT.render();
    }
    render() {
        return <div id="mountNodeT"></div>
    }
}

export default Zhexiantu;
