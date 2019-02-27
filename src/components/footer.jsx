import React, { Component } from 'react';
import { Link } from 'dva/router';
import footerCss from './footer.css'

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            flag:0,
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
        this.one=this.one.bind(this)
    }
    one(i) {
        this.setState({
            flag:i
        })
    }
    render() {
        let { routeData,flag } = this.state
        return (
            <div className={footerCss.footer}>
                {
                    routeData.length && routeData.map((v, i) => {
                        return <Link to={v.path} key={i}>
                            <span className={flag==i?footerCss.active:''} onClick={()=>{
                                this.one(i)
                            }}>{v.str}</span>
                        </Link>
                    })
                }
            </div>
        );
    }
}

export default Footer;
