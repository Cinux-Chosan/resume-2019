import React, { Component } from 'react'
import styles from './style.less'

export default class extends Component {
    render() {
        return (
            <ul className={styles.root}>
                <li>能够熟练和灵活使用 JavaScript，熟悉原生 JS 和 ES6 等新特性</li>
                <li>熟练使用 MVVM 框架 Ember.js 以及拥有 React 开发经验</li>
                <li>熟悉 Redux、Webpack 以及 Babel 等工具，能够为团队编写 Cli 工具提升团队整体开发效率</li>
                <li>熟练使用 Node.js，并能结合 MongoDB 数据库、Puppeteer 等实现想要的功能</li>
                <li>对 HTTP 和 Web 性能优化有一定了解</li>
            </ul>
        )
    }
}
