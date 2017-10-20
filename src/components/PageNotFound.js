import React from 'react';
import PropTypes from 'prop-types';

export default function PageNotFound({ location }) {
    return (
        <h2 style={{ color: 'white', paddingTop:'100px'}}>
            Page {location.pathname} not found
        </h2>
    );
}

PageNotFound.propTypes = {
    location: PropTypes.object.isRequired,
};;
