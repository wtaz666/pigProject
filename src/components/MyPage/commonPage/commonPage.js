import React, { Component } from 'react'
import style from './style.css';
import { Link } from 'dva/router';
import { bigAssistantList } from '../../../utils/datalist';

class Spackindex extends Component {
    render () {
        return (
            <div>
                <div className={style.speakThing}>
                    {
                        bigAssistantList.length && bigAssistantList.map((val, ind) => {
                            return <div className={style.msgBox} key={ind}>
                                        <div className={style.title}>{val.address}-{val.name}</div>
                                        <div className={style.describeBox}>
                                            <div className={style.describe}>{val.describe}</div>
                                            <div className={style.goDetail}>
                                                <Link to={{pathname:"/mypage/speakthing/detail",data:bigAssistantList[ind]}} onClick={() => {
                                                }}>&gt;</Link>
                                            </div>
                                        </div>
                                        <div className={style.time}>{val.preciseTime}</div>
                                    </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Spackindex