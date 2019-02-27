import React, { Component } from 'react';
import style from '../../view/myPage/message/style.css'
import MyPageSelect from '../../components/MyPage/select'
import Zhexian from '../../components/firstPage/zhexiantu'
import { MessageDown } from '../../utils/datalist'
import { connect } from 'dva';

@connect((state) => {
    return state.homeStore;
})

class MyPageList extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'homeStore/getzheData'
        })
    }
    render(){
        const { zheData } = this.props;
        return(
            <div className={style.section}>
            <p>2018-01-13</p>
            <MyPageSelect></MyPageSelect>
            <p className={style.p}>农场生产业绩</p>
            <Zhexian data={zheData.data}></Zhexian>
            <ul className={style.indexUl}>
                <li><span>负责人</span><span>张三</span></li>
                <li><span>职位</span><span>猪九保公司负责人</span></li>
                <li><span>联系电话</span><span>1234453685</span></li>
            </ul>
            <p className={style.p}>工作情况</p>
            <div className={style.sales}>
                {
                    MessageDown.length && MessageDown.map((v,i)=>{
                        return <dl key={i}>
                                <dt>{v.num}</dt>
                                <dd>{v.name}</dd>
                        </dl>
                    })
                }
            </div>
    </div>
        )
    }

}
export default MyPageList