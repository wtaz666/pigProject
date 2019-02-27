import React, { Component } from 'react';
import salesCss from './sales.css'
class Sales extends Component { // 销售业绩
    constructor(props) {
        super(props)
        this.state = {
            salesData: [{
                num: 15179.43,
                name: '饲料销售'
            }, {
                num: 100.15,
                name: '肥猪闭环'
            }, {
                num: 30.19,
                name: '药品疫苗'
            }]
        }
    }
    render() {
        let { salesData } = this.state
        return (
            <div className={salesCss.sales}>
                {
                    salesData.length && salesData.map((v,i)=>{
                        return <dl key={i}>
                                <dt>{v.num}</dt>
                                <dd>{v.name}</dd>
                        </dl>
                    })
                }
            </div>
        );
    }
}

export default Sales;