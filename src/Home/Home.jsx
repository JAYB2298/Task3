import React from 'react'
import {Link} from 'react-router-dom'
import imageone from '../Assets/A7.jfif'
import imagetwo from '../Assets/M51.jfif'
import imagethree from '../Assets/Note20.jfif'
import imagefour from '../Assets/S20+.jfif'
import imagefive from '../Assets/A32.jfif'


export default function Home() {

    let cardDetails=[
        {image:imageone,title:"Domiciliation",link:"/domiciliation"},
        {image:imagetwo,title:"Nomadic Space",link:"/domiciliation"},
        {image:imagethree,title:"Offices & private spaces",link:"/domiciliation"},
        {image:imagefour,title:"Meeting rooms",link:"/domiciliation"},
        {image:imagefive,title:"Seminars",link:"/domiciliation"}
    ]
    
    let card=(card)=>{
        return(
            <div className="col-md-5" key={card.Title}>
                <div className="card">
                    <div className="card-header">
                        <h2>{card.title}</h2>
                    </div>
                    <div className="card-body">
                        <img src={card.image} className="image"></img>
                       <Link to="/Domiciliation">Discover</Link>   
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="container mt-4">
                <div className="row">
                    {cardDetails.map(card)}
                </div>
            </div>
          
        </>
    )
}
