import React, { Component } from 'react';
import { Link } from 'dva/router';
import Zhuzhuangtu from '../zhuzhuangtu'
import AreaCompoent from '../AreaComponent';
import style from '../../../assets/css/style.css';
import { connect } from 'dva';

@connect((state) => {
    return state.homeStore;
})

export default class Market extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'homeStore/getAreaData'
        })
        dispatch({
            type: 'homeStore/getzxData'
        })
    }
    render() {
        const { AreaData, zxData } = this.props;
        return (
            <div>
                <Link to='/indexsale'>
                    <div className={style.goProduct}>
                        <span>销售业绩</span>
                        <span>></span>
                    </div>
                </Link>
               { AreaData.data && <AreaCompoent AreaData={ AreaData.data } />}
                <Link to='/indexsale'>
                    <div className={style.goProduct}>
                        <span>销售业绩</span>
                        <span>></span>
                    </div>
                </Link>
                { zxData.data && <Zhuzhuangtu zhuData={zxData.data} /> }
            </div>
        )
    }
}