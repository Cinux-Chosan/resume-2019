import React from 'react'
import Loadable from 'react-loadable'
import { Spin } from 'antd'

export default (asyncComp) => {
    const LoadableComponent = Loadable({
        loader: asyncComp,
        loading: () => (
            <Spin size="large" style={{
                display: 'block',
                position: 'absolute',
                left: 0,
                right: 0,
                top: '50%',
                bottom: 0,
            }} />
        )
    })
    return LoadableComponent
}