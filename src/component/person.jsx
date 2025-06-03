import React from 'react';
import PropTypes from 'prop-types';

function Person({ name }) {
    return <div>My name is {name}</div>;
}

Person.propTypes = {
    name: PropTypes.string.isRequired,  // Now if number is passed, it will show a warning
};

export default Person;
