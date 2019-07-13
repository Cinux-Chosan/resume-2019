import React, { Component } from 'react'
import { Timeline, Icon } from 'antd';
import styles from './style.less'

export default class extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Timeline pending="long long ago" mode="left" >
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                        重庆紫光华山智安科技有限公司 &lt;前端工程师> 2018-10 ~ 至今
                        <div className={styles.timelineDetail}>
                            <div className={styles.workDetail}>
                                参与项目：紫光业务中台系统开发、前端 UI 组件定制、框架集成、工具编写等
                            </div>
                            <div className={styles.resposibility}>
                                <div className={styles.respTitle}>负责内容：</div>
                                <ul className={styles.respDetail}>
                                    <li>1、作为技术中台前端小组负责人，带领小组成员开发和维护前端公共组件 </li>
                                    <li>2、带领新人快速入手项目开发，帮助组内人员分析代码问题，引导其改正 </li>
                                    <li>3、参与公司内部框架集成工作，编写框架集成组件 </li>
                                    <li>4、编写 Cli 工具，目前正在测试中 </li>
                                    <li>5、作为前端面试官 </li>
                                </ul>
                            </div>
                        </div>
                    </Timeline.Item>

                    <Timeline.Item >
                        重庆猪八戒网络有限公司 &lt;前端工程师> 2015-09 ~ 2018-09
                        <div className={styles.timelineDetail}>
                            <div className={styles.workDetail}>
                                参与项目：猪币商城（对外）项目、公司员工内部系统、公司销售系统、公司微信企业号等
                            </div>
                            <div className={styles.resposibility}>
                                <div className={styles.respTitle}>负责内容：</div>
                                <ul className={styles.respDetail}>
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
