import React from 'react';

const style = {
    border: '5px solid red'
  };

const userInput = (props) => {
    return (<input onChange={props.change} value={props.username} style={style}/>)
};

export default userInput;