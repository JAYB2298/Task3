import Calendar from 'react-calendar'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Domiciliation() {
    
    const [value, onChange] = useState(new Date());
    const [showCalender, ShCalender]=useState(false);

    let cardDetails=[
        {id:1,days:"The day",rupee:"20$"},
        {id:2,days:"10 Days",rupee:"90$"},
        {id:3,days:"The day",rupee:"140$"},
    ]

    
    let togglehandler=()=>{
        ShCalender(true)
    }

    
    let capture=()=>{
        console.log(value);
    }
    
    
    let calender=null;
    if(showCalender){
        calender=(
        <div>
        <Calendar value={value} onChange={onChange}/>
        <Link to="/">
            <button onClick={capture}>Submit</button>
        </Link>
        </div>            
            )
    }
    


    let card=(card)=>{
        return(
            <div className="col-md-3"   key={card.id}>
                <div className=" mt-4 card">
                    <div  className="card-header">
                        <h1>{card.days}</h1>
                    </div>
                    <div className="card-body">
                        <h2>{card.rupee}</h2>
                            <button onClick={togglehandler}>To Choose</button>
                    </div>
                </div>
            </div>        
        )
    }
    
   
    return (
        <div className="container">
            <h1 mt-4>Nomadic Space</h1>
            <div className="row">
                    {cardDetails.map(card)}
                    <div className="mt-5">
                        {calender}
                    </div>
            </div>  
        </div>    
    )
}
