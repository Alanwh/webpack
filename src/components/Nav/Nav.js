import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import style from './nav.scss';

export default class Nav extends Component {
    render() {
        return (
            <ul className={style.nav}>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/page1">Page1</Link></li>
                <li><Link to="/counter">Counter</Link></li>
                <li><Link to="/userinfo">UserInfo</Link></li>
            </ul>
        )
    }
}