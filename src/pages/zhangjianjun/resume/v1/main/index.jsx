import React, { Component } from 'react'
import Box from '@components/resume-box'
import BasicInfo from './basic-info'
import Skills from './skills'
import Tags from './tags'
import Experience from './experience'
import styles from './style.less'

export default class extends Component {
    render() {
        return (
            <div className={styles.root}>
                <Box title="基本信息" >
                    <BasicInfo />
                </Box>
                <Box title="自我评价" >
                    <div className={styles.selfJudgement}>
                        本人为人谦虚，做事谨慎。积极向上，具有较强的自学能力，<b>经常翻阅和翻译英文文档</b>。能够快速融入团队，且能够在团队中做技术分享，并且能够在工作之余主动了解和学习新技术，给团队带来创新！
                    </div>
                </Box>
                <Box title="核心技能" >
                    <Skills />
                </Box>
                <Box title="教育背景" >
                    <ul className="nomargin">
                        <li>2012.09 至 2016.07 重庆邮电大学 本科 计算机与智能科学</li>
                    </ul>
                </Box>
                <Box title="个人标签" >
                    <Tags />
                </Box>
                <Box title="工作经历" >
                    <Experience />
                </Box>
            </div>
        )
    }
}
