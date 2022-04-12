import { LinearProgress } from '@mui/material';
import React from 'react';

const Spinner = () => {
    return (
        <div className='card mx-auto m-5 p-5 w-50'>
            <LinearProgress/>
        </div>
    );
};

export default Spinner;