import React from 'react';
import { render } from 'react-dom';

import HomePage from './containers/home-page';
import './style/main.scss';

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

render(<Root />, document.getElementById('root'));
