import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { connect } from 'react-redux'
import {
    HomePage
} from './Pages';

const Routes = ( { history } ) => (
    <ConnectedRouter history={history}>
        <Route
            path={'/'}
            component={HomePage}
            exact
        />
    </ConnectedRouter>
)

export default connect(state => ({

}))(Routes);
