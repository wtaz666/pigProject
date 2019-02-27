import React, { Component } from 'react';
import Header from '../../components/firstPage/list/sellheader'
import Select from '../../components/firstPage/list/select'
import Sales from '../../components/firstPage/product/firstpSales/sales'
import Zhexian from '../../components/firstPage/zhexiantu'
import { columns, data } from '../../utils/datalist';
import IndexFooter from '../../components/firstPage/IndexFooter'
import style from './firstPage.css'
import { connect } from 'dva';

@connect((state) => {
    return state.homeStore;
})

class IndexSale extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'homeStore/getzheData'
        })
    }
    render() {
        const { zheData } = this.props;
        return (
            <div className={style.container}>
                <Header></Header>
                <div className={style.saleCon}>
                    <Select></Select>
                    <Sales></Sales>
                    <div className = {style.zheCont}>
                        <h3>省区销售</h3>
                        <Zhexian data={zheData.data}></Zhexian>
                    </div>
                    <IndexFooter columns={columns} data={data} props={this.props} num={2} />
                </div>
            </div>
        );
    }
}

export default IndexSale;
