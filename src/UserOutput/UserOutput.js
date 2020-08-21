import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='UserOutput'>
            <p>This is a paragraph and my username is {props.username}</p>
            <p>This is another paragraph</p>
        </div>
    )
};

export default userOutput;