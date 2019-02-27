import React, { Component } from 'react';
import { Link } from 'dva/router';
import style from './style.css'
import img from '../../../assets/images/1.jpg'
class Myindex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabData: [{
                path: '/mypage/bigAssistant',
                name: '大户助理(客户老板消息)',
                sum:3
            }, {
                path: '/mypage/message',
                name: '订阅消息(员工消息)',
                sum:2
            }, {
                path: '/mypage/speakthing',
                name: '说个事(员工消息)',
                sum:3
            }]
        }
    }
    render() {
        let { tabData } = this.state
        return (
            <div className={style.myindex}>
                <div className={style.top}>
                    我的
                </div>
                <div className={style.cont}>
                    <dl>
                        <dt><img src={img} alt="" /></dt>
                        <dd>
                            <span>用户名：李迎春</span>
                            <span>手机号：13522858250</span>
                        </dd>
                    </dl>
                </div>
                <div className={style.pagetab}>
                    <ul>
                        {
                            tabData.length && tabData.map((v, i) => {
                                return <Link key={i} to={{pathname:v.path,name:v.name}}>
                                <li>
                                <p>{v.name}</p>
                                <span>{v.sum}</span>
                                </li>
                                </Link>
                            })
                        }
                    </ul>

                </div>
                <div className={style.logOut}>
                        <p>退出登录</p>
                </div>
            </div>
        );
    }
}

export default Myindex;
