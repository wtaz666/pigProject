import React, { Component } from 'react'
import { statementList } from '../../../utils/datalist'
import style from '../../../view/workPage/workPage.css'
class Record extends Component {
    render () {
        return (
            <div className={style.statementBox} ><ul>
                {
                    statementList.length && statementList.map((v,i)=>{
                        return <li key={i}><span className={style.cont}>{v.name}</span><span > &gt;</span></li>
                    })
                }</ul>
            </div>
        )
    }
}

export default Record;