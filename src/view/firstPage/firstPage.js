import React, { Component } from 'react';
import style from './firstPage.css';
import { Link } from 'dva/router';
import Market from '../../components/firstPage/market/market.js';
import Product from '../../components/firstPage/product/product.js';
import Top from '../../components/firstPage/top/top.js';

export default class firstPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: 'show',
      flag: 1,
      icon: 1,
      market: {
        price: 15200.43,
        sumPrice: 1498.34,
        grade: 90.25
      },
      product: {
        price: 350.12,
        sumPrice: 1498.34,
        grade: 90.25
      },
      switchFlag: 0,
      routeData: [{
        id: 0,
        path: '/ondexpage',
        str: '首页'
      }, {
        id: 1,
        path: '/workpage',
        str: '工作'
      }, {
        id: 2,
        path: '/mypage',
        str: '我的'
      }]
    }
    this.one = this.one.bind(this);
  }
  one(i) {
    this.setState({
      flag: i
    })
  }
  render() {
    let { isShow, flag, routeData, switchFlag } = this.state;
    return <div className={style.IndexPage}>
      <div className={style.header}>
        <p className={style.title}>首页</p>
        <Top topData={this.state} />
      </div>
      <div className={style.content}>
        <div className={style.tab}>
          <div className={flag === 1 ? style.active : style.tabLeft} onClick={() => {
            this.setState({
              isShow: 'show',
              flag: 1
            });
          }}>
            销售业绩
                  </div>
          <div className={flag === 2 ? style.active : style.tabRight} onClick={() => {
            this.setState({
              isShow: 'hide',
              flag: 2
            });
          }}>
            生产业绩
                  </div>
        </div>
        {
          isShow === 'show' ? <Market props={this.props} /> : <Product props={this.props} />
        }
      </div>
      <div className={style.footer}>
        {
          routeData.length && routeData.map((v, i) => {
            return <Link to={v.path} key={i}>
              <span className={switchFlag === i ? style.footerActive : ''} onClick={() => {
                this.one(i)
              }}>{v.str}</span>
            </Link>
          })
        }
      </div>
    </div>
  };
};


