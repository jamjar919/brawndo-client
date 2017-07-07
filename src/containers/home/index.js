import React from 'react';
import PropTypes from 'prop-types';

import Content from '../../components/content';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component {

    render() {
        return (
          <div className={this.props.className}>
            <Content text="home page content" />
          </div>
        );
    }
}

Home.propTypes = {
    className: PropTypes.string,
};

export default Home;
