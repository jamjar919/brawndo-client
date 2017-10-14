import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
    deleteFriendAction,
} from '../../actions';

class FriendInput extends React.Component {
    constructor() {
        super();
        this.state = { inputId: `friend${this.props.id}` };
    }

    addFriend() {
        console.log(this.state.inputId);
        this.props.add();
    }

    render() {
        return (
            <li className={`friend ${this.props.className}`}>
                <div className="input-group">
                    <input type="text" placeholder="Enter a place here" id={this.state.inputId} />
                    {
                        !this.props.editable ?
                        (
                            <div className="input-group-addon">
                                <a onClick={this.props.delete(this.props.id)}>&times;</a>
                            </div>
                        )
                        :
                        (
                            <div className="input-group-addon">
                                <a onClick={this.addFriend()}>Add</a>
                            </div>
                        )
                    }
                </div>
            </li>
        );
    }
}

FriendInput.propTypes = {
    id: PropTypes.number.isRequired,
    className: PropTypes.string,
    editable: PropTypes.bool,
    add: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
};

FriendInput.defaultProps = {
    className: '',
    editable: false,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
    delete: id => dispatch(deleteFriendAction(id)),
    add: name => dispatch(deleteFriendAction(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendInput);
