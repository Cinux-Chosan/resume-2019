import React, { Component } from 'react'
import styles from './style.less'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.left}>
                    <div className={styles.basicItem}>
                        <label>姓名</label> XXX
                    </div>
                    <div className={styles.basicItem}>
                        <label>性别</label> 男
                    </div>
                    <div className={styles.basicItem}>
                        <label>出生年月</label> 1993/08/01
                    </div>
                    <div className={styles.basicItem}>
                        <label>民族</label> 汉族
                    </div>
                    <div className={styles.basicItem}>
                        <label>联系电话</label> 17782369765
                    </div>
                    <div className={styles.basicItem}>
                        <label>毕业院校</label> 重庆邮电大学
                    </div>
                    <div className={styles.basicItem}>
                        <label>学历</label> 本科
                    </div>
                    <div className={styles.basicItem}>
                        <label>专业</label> 计算机
                    </div>
                </div>
                <div className={styles.right}>
                    <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=346047287,3883566532&fm=27&gp=0.jpg" />
                </div>
            </div>
        )
    }
}
