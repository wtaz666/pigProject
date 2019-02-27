import React, { Component } from 'react';
import G2 from '@antv/g2';
import DataSet from '@antv/data-set';
import '../../assets/css/style.css';



 class Zhuzhuangtu extends Component {
  componentDidMount() {
    
    let {
      zhuData
    } = this.props;
    const ds = new DataSet();
    var dv = ds.createView().source(zhuData);
    dv.transform({
      type: 'fold',
      fields: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'], // 展开字段集
      key: '农场开发', // key字段
      value: '农场流失' // value字段
    });

    var chart = new G2.Chart({
      container: 'mountNode',
      forceFit: true,
      height: 300,
      padding: ['auto', 10, 'auto', 'auto']
    });
    chart.source(dv);
    chart.intervalStack().position('农场开发*农场流失').color('name');
    chart.render();
  }
  render() {
    return <div id="mountNode"></div>
  }
}
export default Zhuzhuangtu