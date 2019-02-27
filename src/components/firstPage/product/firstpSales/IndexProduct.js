import React, { Component } from 'react';
import proCss  from './IndexProduct.css'
class Production extends Component {
    constructor(props) {
        super(props)
        this.state = {
            proData: [{
                num: '6744',
                name: '母猪规模',
                col:0
            }, {
                num: '89.72%',
                name: '分娩率',
                col:0
            }, {
                num: '10.24',
                name: '窝产活子率',
                col:0
            },{
                num: '3.7%',
                name: '分娩损失率',
                col:1
            }, {
                num: '0.62%',
                name: '母猪脱产率',
                col:0
            }, {
                num: '1.33%',
                name: '保育损失率',
                col:0
            }, {
                num: '0.46%',
                name: '育成损失率',
                col:1
            }]
        }
    }
    render() {
        let { proData } = this.state
        return (
            <div className={proCss.pro}>
                {
                    proData.length && proData.map((v,i)=>{
                        return <dl key={i}>
                                <dt className={v.col === 1? proCss.col : ''}>{v.num}</dt>
                                <dd>{v.name}</dd>
                        </dl>
                    })
                }
            </div>
        );
    }
}

export default Production;