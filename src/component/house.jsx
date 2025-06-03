import React from 'react';
import Person from './person';

function House() {
    return (
        <Person name={23} />  // This will trigger a warning in the console
    );
}

export default House;
