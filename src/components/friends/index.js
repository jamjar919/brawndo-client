import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FriendInput from './friendinput';

class Friends extends React.Component {
    constructor() {
        super();
        this.state = {};
    }


    render() {
        const friendInputs = [];
        for (let i = 0; i < this.props.friends.length; i += 1) {
            friendInputs.push(<FriendInput key={i} id={i} />);
        }
        friendInputs.push(<FriendInput key={-1} id={-1} editable />);
        return (
            <ul className={`friendsPicker ${this.props.className}`}>
                { friendInputs }
            </ul>
        );
    }
}

Friends.propTypes = {
    className: PropTypes.string,
    friends: PropTypes.arrayOf(Object),
};

Friends.defaultProps = {
    className: '',
};

const mapStateToProps = state => (
    {
        friends: state.friends,
    }
);


export default connect(mapStateToProps)(Friends);
