import React, { Component } from 'react';
import style from './style.css'
import RouterView from '../../../router/RouterView'

class Message extends Component {
    render() {
        let { name } = this.props.location
        return (
            <div className={style.message}>
            <RouterView routes={this.props.routes}></RouterView>
            </div>
        );
    }
}

export default Message;
