import React from 'react';

let Char=(props)=>{
    let style={
        display:'inline-block',
        padding:'16px',
        margin:'16px',
        border:'2px solid border', 
        textAlign:'center',
        

    };
    return(
        <div style={style}
        onClick={props.clicked}>
            {props.character}
        </div>
    );
};

export default Char;