import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Navbar extends React.Component {

    render() {
        return (
          <nav>
            <ul>
              <li><a to="/" onClick={this.props.navigateTo.bind(this, '/about')} >Home</a></li>
              <li><a to="/about" onClick={this.props.navigateTo.bind(this, '/about')} >About</a></li>
            </ul>
          </nav>
        );
    }
}

Navbar.propTypes = {
    navigateTo: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    location: state.location,
});

const mapDispatchToProps = dispatch => ({
    navigateTo: (location) => {
        dispatch(props.context.router.apush(location));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
