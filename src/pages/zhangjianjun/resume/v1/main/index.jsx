import React, { Component } from 'react'
import Box from '@components/resume-box'
import styles from './style.less'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.root}>
                <Box title="基本信息" >
                    这是
                </Box>
                <Box title="自我评价" >
                    aaaa
                </Box>
                <Box title="核心技能" >
                    aaaa
                </Box>
                <Box title="教育背景" >
                    aaaa
                </Box>
                <Box title="工作经历" >
                    aaaa
                </Box>
            </div>
        )
    }
}
