import React, { Component } from 'react';
import style from './workPage.css';
import { Link } from 'dva/router';
import RouterView from '../../router/RouterView';

class WorkPage extends Component {
    render() {
        return (
            <div className={style.workPage}>
                <div className={style.header}>
                    <a href="javaScript:history.go(-1);" className={style.back}>返回</a>
                    <span className={style.title}>襄阳农场</span>
                    <span></span>
                </div>
                <div className={style.tab}>
                    <span className={style.spanFirst}><Link to="/workpage/schedule">代办日程</Link></span>
                    <span className={style.spanSecond}><Link to="/workpage/reportForms">常规记录</Link></span>
                    <span className={style.spanThird}><Link to="/workpage/record">报表</Link></span>
                </div>
                <RouterView routes={this.props.routes}></RouterView>
            </div>
        );
    }
}

export default WorkPage;
