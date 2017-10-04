import React from 'react';
import PropTypes from 'prop-types';

export default function PageNotFound({ location }) {
    return (
        <p style={{ color: 'white' }}>
            Page not found - the path, {location.pathname},
            did not match any React Router routes.
        </p>
    );
}

PageNotFound.propTypes = {
    location: PropTypes.object.isRequired,
};;
