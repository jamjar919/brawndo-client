import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prefer-stateless-function
class Navbar extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <nav>
                    <ul>
                        <li><Link to="/" onClick={() => this.props.dispatch(push('/'))} ><i className="fa fa-home" aria-hidden="true" /> Home</Link></li>
                        <li><Link to="/about" onClick={() => this.props.dispatch(push('/about'))} >About</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

Navbar.propTypes = {
    dispatch: PropTypes.func,
    className: PropTypes.string,
};

const mapStateToProps = state => ({
    location: state.location,
});

const mapDispatchToProps = dispatch => ({
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
