import React from 'react';

import Friends from '../../components/friends';

// eslint-disable-next-line react/prefer-stateless-function
class Home extends React.Component {

    render() {
        return (
            <div className="col-md-9">
                <Friends />
            </div>
        );
    }
}

export default Home;
