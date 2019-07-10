import React, { Component } from 'react'
import styles from './style.less'
export default class extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.resume}>
                {this.props.yield}
            </div>
        )
    }
}
