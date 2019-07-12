import React, { Component } from 'react';
import { BaseActions } from "tomatobean";

import './style.less';
// import cryImg from '../../../../assets/images/error.png';

@BaseActions
export default class Exception extends Component {
  state = {
    time: 3,
  }
  componentDidMount() {
    let count = 3;
    const timer = () => {
      if (count < 0) {
        this.props.baseActions.linkTo('/home');
        return;
      }
      this.setState({
        time: count,
      });
      setTimeout(() => {
        timer();
      }, 1000);
      count--;
    };
    timer();
  }
  render() {
    return (
      <div className="error-page">
        <div className="error-message">
          {/* <img className="error-image" src={cryImg} alt="cry" /> */}
          <span>哎呀！出错了</span>
        </div>
        <div className="error-operation-message">
          <span>遇到错误<span id="time-count">{this.state.time}</span>秒后自动跳转，立即跳转点击</span>
          <span className="go-home-button" onClick={() => this.props.baseActions.linkTo('/home')}>返回首页</span>
        </div>
      </div>
    );
  }
}
