import React, { Component } from 'react'
import { logBookList } from '../../../utils/datalist'
import style from '../../../view/workPage/workPage.css'
class ReportForms extends Component {
    render() {
        return (
            <div className={style.reportFormsCont}>
                <div className={style.reportFormsContainer}>
                    {
                        logBookList.length && logBookList.map((v, i) => {
                            return <div key={i} className={style.pigbox}>
                                    <h3 key={i}>{v.type}</h3>
                                    {
                                        <div className={style.pigmessage}>
                                            {
                                                v.datalist.map((val, ind) => {
                                                    return <dl className={style.dls} key={ind} >
                                                        <dt>
                                                            <img src='https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2343146005,348369914&fm=26&gp=0.jpg' alt="图片加载不出来" />
                                                        </dt>
                                                        <dd>{val.name}</dd>
                                                    </dl>
                                                })
                                            }
                                        </div>
                                    }
                                </div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ReportForms;