import React, { Component } from 'react';
import myPagecss from './myPage.css'
import RouterView from '../../router/RouterView'

class Mypage extends Component {
    render() {
        return (
            <div className={myPagecss.myPage}>
                <RouterView routes={this.props.routes}></RouterView>
            </div>
        );
    }
}

export default Mypage;
