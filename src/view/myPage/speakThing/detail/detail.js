import React, { Component } from 'react';
import style from './detail.css';

class SpeakDetail extends Component {
    render() {
        let { data } = this.props.location;
        return (
            <div className={style.speakThingDetail}>
                <div className={style.top}>
                    <a href="javaScript:history.go(-1);">&lt;</a>
                    <span>详情</span>
                </div>
                <div className={style.msgBox}>
                    {/* <div className={style.title}>{data.address}</div> */}
                    <div className={style.msg}>
                        <div className={style.time}>{data.time}</div>
                        <div className={style.name}>{data.name}</div>
                    </div>
                    <div className={style.describeBox}>
                        <div className={style.describe}>{data.describe}</div>
                    </div>
                    <div className={style.image}>
                        <img src={data.images} alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default SpeakDetail;
