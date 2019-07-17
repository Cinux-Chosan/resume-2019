import React, { Component } from 'react'
import { Tag } from 'antd';
import styles from './style.less'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.root}>
                <Tag>HTML/CSS</Tag>
                <Tag>Javascript</Tag>
                <Tag>ES6</Tag>
                <Tag>React</Tag>
                <Tag>Ember.js</Tag>
                <Tag>Node.js</Tag>
                <Tag>Babel</Tag>
                <Tag>Webpack</Tag>
                <Tag>Gulp</Tag>
                <Tag>Less/Sass</Tag>
                <Tag>Framework7</Tag>
                <Tag>Bootstrap</Tag>
                <Tag>antd</Tag>
                <Tag>Express/Koa</Tag>
                <Tag>MongoDB</Tag>
                <Tag>Puppeteer</Tag>
                <Tag>Websocket</Tag>
                <Tag>Emmet</Tag>
                <Tag>Redux/Redux-saga</Tag>
                <Tag>Cli 编写</Tag>
                <Tag>...</Tag>
            </div>
        )
    }
}
