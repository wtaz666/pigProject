import React, { Component } from 'react'; 
import { Select } from 'antd'
import sele from '../../assets/css/select.css'
const Option = Select.Option
class MypageSelect extends Component {
   render(){
    return(
        <div className={sele.selectBox}>
             <Select defaultValue="农场" style={{ width: 120 }} className={sele.select}>
              <Option value="zhou" className={sele.option}>城阳农场</Option>
              <Option value="sheng" className={sele.option}>襄阳农场</Option>
              
            </Select> <Select defaultValue="月份" style={{ width: 120 }} className={sele.select}>
              <Option value="zhou" className={sele.option}>11月</Option>
              <Option value="sheng" className={sele.option}>10月</Option>
             
            </Select> <Select defaultValue="综合评分（92.75分）" style={{ width: 120 }} className={sele.select}>
              <Option value="zhou" className={sele.option}>100</Option>
              <Option value="sheng" className={sele.option}>90</Option>
             
            </Select>
        </div>
     )
   }
      
   
}
export default MypageSelect;