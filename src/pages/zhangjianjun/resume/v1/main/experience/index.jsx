import React, { Component } from 'react'
import { Timeline, Icon } from 'antd';
import ProjBox, { Item } from './proj-intro'
import styles from './style.less'

export default class extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Timeline pending=" " mode="left" >
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                        重庆紫光华山智安科技有限公司 &lt;前端工程师> 2018-10 ~ 至今
                        <div className={styles.timelineDetail}>
                            <div className={styles.projSummary}>
                                主要参与项目：紫光业务中台系统开发、前端 UI 组件定制、框架集成、工具编写等
                            </div>
                            <div className={styles.projItem}>
                                <div className={styles.projItemLabel}>主要项目概述：</div>
                                <ul className={styles.projList}>
                                    <li>
                                        <ProjBox label="1、紫光业务中台系统项目" className={styles.projItemDetail} labelClass={styles.projLabel}>
                                            <Item label="项目简介" desc="该系统配合公司完成大中台小前台的组织战略，将公共业务从各业务部门剥离，业务中台系统为业务中台部门主要输出产品，包括了组织管理、用户管理、角色管理、单点登录、操作日志、系统设置等各个模块" labelClass={styles.subLabel}></Item>
                                            <Item label="所用技术">
                                                <dd>
                                                    采用技术包括但不限于 <b>React、Redux、Node.js、Webpack、antd、Less 以及 ES6 等</b>
                                                </dd>
                                            </Item>
                                        </ProjBox>
                                    </li>
                                    <li>
                                        <ProjBox label="2、框架集成项目" className={styles.projItemDetail} labelClass={styles.projLabel}>
                                            <Item label="项目简介" desc="编写框架代码，将各业务部门项目集成在一起，使得项目更加紧凑、统一"></Item>
                                            <Item label="所用技术">
                                                <dd>
                                                    采用技术包括但不限于 <b> 基于 Babel 的 AST（抽象语法树）操作、React、Redux、Node.js、Webpack、antd、Less 以及 ES6 等</b>
                                                </dd>
                                            </Item>
                                        </ProjBox>
                                    </li>
                                    <li>
                                        <ProjBox label="3、基础工具编写项目" className={styles.projItemDetail} labelClass={styles.projLabel}>
                                            <Item label="项目简介" desc="编写公司整体的前端 Cli 工具，集成公司公共组件和服务，提升各业务部门开发效率"></Item>
                                            <Item label="所用技术">
                                                <dd>
                                                    采用技术包括但不限于 <b> 基于 Babel 的 AST（抽象语法树）操作、Cas 单点登录、React-Loadable、React、Redux、Redux-saga、Node.js、Webpack、antd、Less 以及 ES6  等</b>
                                                </dd>
                                            </Item>
                                        </ProjBox>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.projItem}>
                                <div className={styles.projItemLabel}>个人负责内容：</div>
                                <ul className={styles.projList}>
                                    <li>1、作为技术中台前端小组负责人，带领小组成员开发和维护前端公共组件 </li>
                                    <li>2、<b>带领新人</b>快速入手项目开发，帮助组内人员分析代码问题，引导其改正 </li>
                                    <li>3、作为<b>主要开发人员</b>参与到公司内部框架集成工作，编写框架集成组件 </li>
                                    <li>4、作为 Cli 工具的<b>主要开发人员</b>，编写灵活且高可用的 Cli 工具 </li>
                                    <li>5、作为前端面试官 </li>
                                </ul>
                            </div>
                        </div>
                    </Timeline.Item>

                    <Timeline.Item >
                        重庆猪八戒网络有限公司 &lt;前端工程师> 2015-09 ~ 2018-09
                        <div className={styles.timelineDetail}>
                            <div className={styles.projSummary}>
                                主要参与项目：猪币商城（对外）项目、公司员工内部系统、公司销售系统、公司微信企业号等
                            </div>
                            <div className={styles.projItem}>
                                <div className={styles.projItemLabel}>主要项目概述：</div>
                                <ul className={styles.projList}>
                                    <li>
                                        <ProjBox label="1、猪币商城（对外）项目" className={styles.projItemDetail} labelClass={styles.projLabel}>
                                            <Item label="项目简介" desc="该系统为一个在线商城，承载公司主要代币的购买、消费等" labelClass={styles.subLabel}></Item>
                                            <Item label="所用技术">
                                                <dd>
                                                    采用技术包括但不限于 <b>Ember.js、Less、Framework7、Bootstrap 等</b>
                                                </dd>
                                            </Item>
                                        </ProjBox>
                                    </li>
                                    <li>
                                        <ProjBox label="2、Boss 2.0 项目" className={styles.projItemDetail} labelClass={styles.projLabel}>
                                            <Item label="项目简介" desc="公司内部员工办公系统 Boss 2.0，集合了丰富的办公模块，提升办公效率"></Item>
                                            <Item label="所用技术">
                                                <dd>
                                                    采用技术包括但不限于 <b> Ember.js、Less、Framework7、Bootstrap 等</b>
                                                </dd>
                                            </Item>
                                        </ProjBox>
                                    </li>
                                </ul>
                            </div>
                            <div className={styles.projItem}>
                                <div className={styles.projItemLabel}>个人负责内容：</div>

                                <ul className={styles.projList}>
                                    <li>1、作为部分项目前端负责人，参与项目的基础架构、搭建工作 </li>
                                    <li>2、参与项目评审，评估前端工作量和开发周期 </li>
                                    <li>3、编写高质量、可重用组件和业务代码 </li>
                                    <li>4、配合后端人员联调以及优化前端项目 </li>
                                    <li>5、探索新技术，在小组内部做技术分享 </li>
                                </ul>
                            </div>
                        </div>
                    </Timeline.Item>
                </Timeline>
            </div>
        )
    }
}
