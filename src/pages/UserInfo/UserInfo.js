import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from "actions/userInfo";
window.getUserInfo = getUserInfo;

class UserInfo extends Component {

    render() {
        const {userInfo, isLoading, errorMsg} = this.props.userInfo;
        window.userInfo = userInfo;
        return (
            <div>
                {
                    isLoading ? '请求信息中......' :
                        (
                            errorMsg ? errorMsg :
                                <div>
                                    <p>用户信息：</p>
                                    <p>用户名：{userInfo.name}</p>
                                    <p>介绍：{userInfo.intr}</p>
                                </div>
                        )
                }
                <button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
            </div>
        )
    }
}

export default connect((state) => ({userInfo: state.userInfo}), {getUserInfo})(UserInfo);