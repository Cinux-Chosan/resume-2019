import 'regenerator-runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import MapRoutes from './routes/mapRoutes'
import store from './redux'
import './global.style.less'
import { NavLink } from 'react-router-dom'

ReactDOM.render(
    <Provider store={store}>
        <Router>
        <NavLink to="/1">aaaaa</NavLink>

            <MapRoutes />
        </Router>
    </Provider>,
    document.getElementById('root'))
