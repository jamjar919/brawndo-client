import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Navbar extends React.Component {

    render() {
        return (
          <div className="col-md-3">
            <nav>
              <ul>
                <li><a to="/" onClick={() => this.props.dispatch(push('/'))} ><i className="fa fa-home" aria-hidden="true" /> Home</a></li>
                <li><a to="/about" onClick={() => this.props.dispatch(push('/about'))} >About</a></li>
              </ul>
            </nav>
          </div>
        );
    }
}

Navbar.propTypes = {
    dispatch: PropTypes.func,
};

const mapStateToProps = state => ({
    location: state.location,
});

const mapDispatchToProps = dispatch => ({
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
