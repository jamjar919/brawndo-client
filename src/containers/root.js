import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Navbar from 'Components/Navbar';
import Home from './Home';
import About from './About';
import '../style/main.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Root extends React.Component {

    render() {
        return (
            <Provider store={this.props.store}>
                { /* ConnectedRouter will use the store from Provider automatically */ }
                <ConnectedRouter history={this.props.history}>
                    <div className="row">
                        <Navbar
                            className="col-3"
                        />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
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
