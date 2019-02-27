import React, { Component } from 'react';
import style from './style.css';
import RouterView from '../../../router/RouterView'
class speakThing extends Component {
 
    render() {
        return (
            <div className={style.speakthing}>
                <RouterView routes={this.props.routes}></RouterView>
            </div>
        );
    }
}

export default speakThing;
