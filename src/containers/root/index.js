import React from 'react';

import HomePage from '../home-page';
import '../../style/main.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Root extends React.Component {

    render() {
        return (
          <div>
            <HomePage />
          </div>
        );
    }
}

export default Root;
