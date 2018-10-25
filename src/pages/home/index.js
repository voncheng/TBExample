/**
 * File: /Users/fengchengpu/Project/XBProject/CBCenter/src/pages/home/index.js
 * Project: /Users/fengchengpu/Project/XBProject/CBCenter
 * Created Date: Friday November 24th 2017 2:14:39 pm
 * Author: chengpu
 * -----
 * Last Modified:Friday November 24th 2017 2:14:39 pm
 * Modified By: chengpu
 * -----
 * Copyright (c) 2017 MagCloud
 */
import React, { Component } from "react";
import { Selecter, BaseActions } from "tomatobean";
import { sayHello } from "../../models/home.m";
import "./style.less";

@BaseActions
@Selecter(["home"], { sayHello })
export default class View extends Component {
  componentDidMount () {
    this.props.actions.sayHello().then(res => {
      console.log(res);
    });
  }
  render () {
    const { enters } = this.props.home;
    const loopEnters = data => data.map((item) => {
      return (
        <div key={item.id} className="shortcut-enter-item" >
          <span className="shortcut-name">{item.name}</span>
        </div>
      );
    });
    return (
      <div className="home-page">
        <p className="group-title">快捷进入</p>
        <div className="shortcut-enters">
          {loopEnters(enters)}
        </div>
      </div>
    );
  }
}
