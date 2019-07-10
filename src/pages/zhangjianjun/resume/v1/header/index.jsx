import React, { Component } from 'react'
import { Icon } from 'antd'
import styles from './style.less'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.left}>
                    <div className={styles.resumeMark}>
                       个人简历
                    </div>
                    <div className={styles.intention}>
                        求职意向：WEB 前端研发工程师
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.infoItem}>
                    <Icon type="contacts" theme="filled"/>张建军</div>
                    <div className={styles.infoItem}>
                    <Icon type="home" theme="filled"/>重庆市铜梁区</div>
                    <div className={styles.infoItem}>
                    <Icon type="mail" theme="filled"/>179817004@qq.com</div>
                </div>
            </div>
        )
    }
}
