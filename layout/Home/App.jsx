import React, { Component } from 'react'
import { Provider } from 'react-redux';
import { store, history } from './Store';
import PublicRoutes from './routes';

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Provider store={store}>
                    <PublicRoutes history={history} />
                </Provider>
            </React.Fragment>
        );
    }
}
