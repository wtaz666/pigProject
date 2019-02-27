import React, { Component } from 'react'
import { Select } from 'antd'
import sele from '../../../assets/css/select.css'
const Option = Select.Option

class componentName extends Component {
  render () {
    return (
      <div>
         <div className={sele.nav}>
          <div>
            <Select defaultValue="周区" style={{ width: 120 }} className={sele.select}>
              <Option value="zhou" className={sele.option}>周区</Option>
              <Option value="sheng" className={sele.option}>省区</Option>
              <Option value="Yiminghe">分公司</Option>
            </Select>
          </div>
          <div>
            <Select defaultValue="时间" style={{ width: 120 }} className={sele.select}>
              <Option value="fen">分</Option>
              <Option value="miao">秒</Option>
            </Select>
          </div>
         </div>
      </div>
    )
  }
}

export default componentName