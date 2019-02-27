import React from 'react';
import { connect } from 'dva';
import Style from './IndexPage.css';
import Header from '../components/firstPage/list/sellheader'
import Select from '../components/firstPage/list/select'
import Sales  from '../components/firstPage/product/firstpSales/sales'
import 'antd/dist/antd.css'
function ListOne() {
  return (
    <div className = {Style.wrap}>
        <Header></Header>
        <Select></Select>
        <Sales></Sales>
   </div>
  );
}

export default connect()(ListOne);