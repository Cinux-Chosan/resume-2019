import React, { Component } from 'react'
import { Icon } from 'antd'
import styles from './style.less'
import bg from '@public/imgs/bg.jpg'
import bg2 from '@public/imgs/bg2.jpg'
import bg3 from '@public/imgs/bg3.jpg'
import bg4 from '@public/imgs/bg4-c.jpg'

export default class extends Component {
    render() {
        return (
            <div className={styles.root}>
                <img src={bg4} className={styles.bg}/>
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
                    <Icon type="contacts" theme="filled"/>XXX</div>
                    <div className={styles.infoItem}>
                    <Icon type="home" theme="filled"/>重庆市铜梁区</div>
                    <div className={styles.infoItem}>
                    <Icon type="mail" theme="filled"/>179817004@qq.com</div>
                </div>
            </div>
        )
    }
}
