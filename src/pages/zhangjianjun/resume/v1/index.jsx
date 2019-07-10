import React, { Component } from 'react'
import Header from './header'
import Body from './main'
import styles from './style.less'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.root}>
                <Header />
                <Body />
            </div>
        )
    }
}
