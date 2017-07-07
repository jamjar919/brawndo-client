import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter, push } from 'react-router-redux';

import Home from '../home';
import About from '../about';
import Navbar from '../../components/navbar';
import '../../style/main.scss';

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
                  context={this.context}
                  navigateTo={this.props.store.dispatch(push(location))}
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
