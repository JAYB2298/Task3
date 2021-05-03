import React from 'react';
let Validation=(props)=>{
    let msg='text too short';
    if(props.len>5){
        msg='text is enough';
    }
    return(
        <>
        <h2>{msg}</h2>
       </>
    );
};

export default Validation;