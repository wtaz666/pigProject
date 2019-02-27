import React, { Component } from 'react';
import style from './style.css'
import Section from '../../../components/MyPage/mypageList'

class MessageOne extends Component {
    render() {
        return (
            <div className={style.wrapOne}>
               <div className={style.top}>
                    <a href="javaScript:history.go(-1);">&lt;</a>
                    <span>订阅消息</span>
                </div>
                <h6 className={style.tit}>襄晨阳农场生产综合 指标低于60分</h6>
                <Section></Section>               
            </div>
        );
    }
}

export default MessageOne;