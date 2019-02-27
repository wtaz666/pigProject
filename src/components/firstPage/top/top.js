import React, { Component } from 'react';
import style from '../../../view/firstPage/firstPage.css';
class Top extends Component {
    render () {
        let {isShow} = this.props.topData;
        return (
            <div className={style.box}>
                <div className={style.boxLeft}>
                    <p>当月销售额 （万元）</p>
                    <p className={style.price}>{isShow === 'show' ? this.props.topData.market.price : this.props.topData.product.price}</p>
                    <p className={style.sumMarket}>总销售额：{isShow === 'show' ? this.props.topData.market.sumPrice : this.props.topData.product.sumPrice} （万元）</p>
                </div>
                <div className={style.boxRight}>
                    <p>生产指标总和评分</p>
                    <p className={style.price}>{isShow === 'show' ? this.props.topData.market.grade : this.props.topData.product.grade}</p>
                </div>
            </div>
        )
    }
}

export default Top;