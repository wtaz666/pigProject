import React from 'react';
import style from '../../../assets/css/header.css'
const Header = () => {
  return (
    <div>
        <header className={style.head}>
          <a href="javascript:history.go(-1);" className={style.goback}>&lt;&nbsp;返回</a>
          <h4>生产业绩</h4>
          <span></span>
        </header>
        
    </div>
  );
};

Header.propTypes = {
};

export default Header;