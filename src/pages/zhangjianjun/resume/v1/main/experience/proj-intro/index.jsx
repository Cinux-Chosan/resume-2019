import React, { Component } from 'react'
import styles from './style.less'

export default class ProjBox extends Component {
    render() {
        const { label, labelClass, className, desc, children } = this.props
        return (
            <dl className={[styles.root, className].join(' ')}>
                <dt className={labelClass}>{label}</dt>
                {desc ? <dd>{desc}</dd> : null}
                {children}
            </dl>
        )
    }
}

export const Item = (props) => <dd><ProjBox {...props} /></dd>