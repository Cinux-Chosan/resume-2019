import React, { Component } from 'react'
import styles from './style.less'

export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.titleLine}>
                    <span className={styles.title}> {this.props.title} </span>
                </div>
                <div className={styles.boxMain}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
