import React, { Component } from 'react';
import { Table,Button } from 'antd';
import AssetStyle from '../../assets/css/style.css';
import styles from '../../index.css';
class IndexFooter extends Component {
    goSalePage(){
        let { props } = this.props;
        props.history.push('/indexsale')
    }
    goProductPage(){
        let { props } = this.props;
        props.history.push('/indexproduct')
    }
    render() {
        let { columns, data, num } = this.props;
        return <div className={styles.ranking}>
                    <h3>农场排名</h3>
                    <Table columns={columns} dataSource={data} size="middle"/>
                    <ul className={AssetStyle.indexUl}>
                        <li><span>联系人</span><span>王麻子</span></li>
                        <li><span>职位</span><span>公司负责人</span></li>
                        <li><span>联系电话</span><span>1234453685</span></li>
                    </ul>
                    <div className={AssetStyle.button}>
                      {
                          num === 1? <Button onClick={() => {this.goSalePage()}}>查看销售业绩</Button>:<Button onClick={() => {this.goProductPage()}}>查看生产业绩</Button>
                      }
                    </div>
            </div>
    }
}

export default IndexFooter;