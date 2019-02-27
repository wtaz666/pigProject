import React, { Component } from 'react';
import style from './style.css'
import { Link } from 'dva/router';
import {MessageList} from '../../../utils/datalist'
class Messageindex extends Component {
    render() {
        return (
            <div className={style.message}>
                <div className={style.top}>
                    <Link to="/mypage/myindex">&lt;</Link>
                    <span>订阅消息</span>
                </div>
                {/* <div> */}
                    <ul className={style.DownBox} >
                         {
                                MessageList.length && MessageList.map((v, i) => {
                                    return <li className={style.li} key={i}>
                                    <p className={style.click}>
                                    <span className={style.title}>{v.name}</span>   
                                    <span><Link  to={{pathname:"/mypage/message/messageOne",data:MessageList[i]}} onClick={()=>{
                                        console.log(i)
                                    }}>></Link></span>
                                    </p>
                                    <span className={style.dataList}>{v.date} {v.time}</span>
                                    </li> 
                                })
                       }
                    </ul>
               {/* </div> */}
            </div>
        );
    }
}

export default Messageindex;
