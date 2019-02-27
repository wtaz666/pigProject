import React, { Component } from 'react';
import { Link } from 'dva/router';
import AreaCompoent from '../AreaComponent';
import style from '../../../assets/css/style.css';
import ProductMsg from './firstpSales/IndexProduct';
import { connect } from 'dva';

@connect((state) => {
    return state.homeStore;
})

class Product extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'homeStore/getAreaData'
        })
        dispatch({
            type: 'homeStore/getzxData'
        })
    }
    render () {
        const { AreaData } = this.props;
        return (
            <div className={styleMedia.product}>
                <Link to='/indexproduct'>
                    <div className={style.goProduct}>
                        <span>生产业绩</span><span>></span>
                    </div>
                </Link>
                <ProductMsg />
                <Link to='/indexproduct'>
                    <div className={style.goProduct}>
                        <span>生产业绩</span><span>></span>
                    </div>
                </Link>
               { AreaData.data && <AreaCompoent AreaData={ AreaData.data } />}
            </div>
        )
    }
}

export default Product;