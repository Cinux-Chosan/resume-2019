import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { CommonLayout } from 'hz-common-web-component'
export default class extends Component {
    render() {
        return (
            <>
                {/* <CommonLayout> */}
                    <NavLink to="/1">aaaaa</NavLink>
                    {this.props.yield}
                {/* </CommonLayout> */}
            </>
        )
    }
}