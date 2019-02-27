import React, { Component } from 'react';
import { columns, data } from '../../utils/datalist';
import Zhexian from '../../components/firstPage/zhexiantu'
import Select from '../../components/firstPage/list/select'
import IndexFooter from '../../components/firstPage/IndexFooter'
import Header from '../../components/firstPage/list/productheader'
import Sales  from '../../components/firstPage/product/firstpSales/IndexProduct'
import style from './firstPage.css'
import { connect } from 'dva';

@connect((state) => {
    return state.homeStore;
})

class Indexproduct extends Component {
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
                        <h3>省区生产</h3>
                        <Zhexian data={zheData.data}></Zhexian>
                    </div>
                    <IndexFooter columns = { columns } data = { data } props = {this.props} num = {1} />
                </div>
           </div>
        )
    }
}

export default Indexproduct;