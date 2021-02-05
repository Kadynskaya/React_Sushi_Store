import React from 'react';
import PropTypes from "prop-types";

const MediaQuery = (query) => {
    const [matches, setMatches] = React.useState(false);

    React.useEffect(
        () => {
            const mediaQuery = window.matchMedia(query);
            setMatches(mediaQuery.matches);
            const handler = (event) => setMatches(event.matches);
            mediaQuery.addEventListener('change', handler);
            return () => mediaQuery.removeEventListener('change', handler);
        },
        []
    );
    return matches;
};

MediaQuery.propTypes = {
    query: PropTypes.string,
};

export default MediaQuery;
