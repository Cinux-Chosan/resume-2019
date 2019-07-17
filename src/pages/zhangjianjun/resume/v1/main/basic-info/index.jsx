import React, { Component } from 'react'
import styles from './style.less'
// import avatar from '@public/imgs/zjj.jpg'
// import avatar from '@public/imgs/zjj2.png'
// import avatar from '@public/imgs/zjj4.png'
import avatar from '@public/imgs/zjj6.png'

export default class extends Component {
    render() {
        return (
            <div className={styles.root}>
                <div className={styles.left}>
                    <div className={styles.basicItem}>
                        <label>姓名</label> 张建军
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
                        <label>毕业院校</label> 重庆邮电大学
                    </div>
                    <div className={styles.basicItem}>
                        <label>学历</label> 本科
                    </div>
                    <div className={styles.basicItem}>
                        <label>专业</label> 计算机与智能科学
                    </div>
                    <div className={styles.basicItem}>
                        <label>工作年限</label> 3 ~ 4 年
                    </div>
                    <div className={styles.basicItem}>
                        <label>意向地点</label> 团队融洽，地点不限
                    </div>
                    <div className={styles.basicItem}>
                        <label>联系电话</label> 17782369765（微信同号）
                    </div>
                </div>
                <div className={styles.right}>
                    <img src={avatar} />
                </div>
            </div>
        )
    }
}
