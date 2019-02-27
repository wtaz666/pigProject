import React, { Component } from 'react';
import style from './style.css';
import SpeakIndex from '../../../components/MyPage/commonPage/commonPage';
class BigAssistant extends Component {
    render() {
        return (
            <div className={style.bigAss}>
              <div className={style.top}>
                    <a href="javaScript:history.go(-1);">&lt;</a>
                    <span>大户助理</span>
                </div>
                <SpeakIndex />
            </div>
        );
    }
}

export default BigAssistant;