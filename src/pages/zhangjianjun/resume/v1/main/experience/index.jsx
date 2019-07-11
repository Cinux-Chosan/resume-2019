import React, { Component } from 'react'
import { Timeline, Icon } from 'antd';
import styles from './style.less'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.root}>
                <Timeline pending="至今..." mode="left">
                    <Timeline.Item color="green"> 加入猪八戒实习 2015-09-14 </Timeline.Item>
                    <Timeline.Item color="red" dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>毕业纪念日 2016-06-30</Timeline.Item>
                    <Timeline.Item >
                        {/* <div> */}
                            实习期结束，在猪八戒转正 2016-07-01
                            <div className={styles.workDetail}>
                                参与项目：猪币商城（对外）项目、公司员工内部系统、公司销售系统、公司微信企业号
                            </div>

                        {/* </div> */}
                    </Timeline.Item>
                    <Timeline.Item color="red">从猪八戒辞职 2018-09</Timeline.Item>
                    <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                    入职紫光华智 2018-10
                    </Timeline.Item>
                </Timeline>,
            </div>
        )
    }
}
