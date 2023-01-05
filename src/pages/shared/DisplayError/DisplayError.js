import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {
    const error = useRouteError();
    return (
        <div>
            <p className="text-red-500">Sorry Somethings Went to Wrong!!!</p>
            <p className="text-red-500">{error.statusText || error.message}</p>
        </div>
    );
};

export default DisplayError;