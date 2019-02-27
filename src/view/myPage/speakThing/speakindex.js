import React, { Component } from 'react'
import style from './style.css';
 import SpeakList from '../../../components/MyPage/commonPage/commonPage';

class Spackindexs extends Component {
    render() {
        return (
            <div className={style.bigAss}>
                 <div className={style.top}>
                    <a href="javaScript:history.go(-1);">&lt;</a>
                    <span>说个事</span>
                </div>
                <SpeakList/>
            </div>
        );
    }
}

export default Spackindexs