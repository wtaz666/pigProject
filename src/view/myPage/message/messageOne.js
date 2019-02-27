import React, { Component } from 'react';
import style from './style.css'
import { Link } from 'dva/router';
import Section from '../../../components/MyPage/mypageList'

class MessageOne extends Component {
    render() {
        let { data } = this.props.location;
        return (
            <div className={style.wrapOne}>
               <div className={style.top}>
                    {/* <a href="javaScript:history.go(-1);"></a> */}
                    <Link to="/mypage/message/messageindex">&lt;</Link>
                    <span>订阅消息</span>
                </div>
                <h6 className={style.tit}>{data.name}</h6>
                <Section></Section>               
            </div> 
        );
    }
}

export default MessageOne;
