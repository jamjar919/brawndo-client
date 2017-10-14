import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Navbar from '../components/navbar';
import Home from './home';
import About from './about';
import '../style/main.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Root extends React.Component {

    render() {
        return (
            <Provider store={this.props.store}>
                { /* ConnectedRouter will use the store from Provider automatically */ }
                <ConnectedRouter history={this.props.history}>
                    <div className="container">
                        <div className="row">
                            <Navbar
                                className="col-md-12"
                            />
                        </div>
                        <div className="row">
                            <Route exact path="/" component={Home} />
                            <Route exact path="/about" component={About} />
                        </div>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

Root.propTypes = {
    history: PropTypes.object,
    store: PropTypes.object,
};

export default Root;
