import {React} from "react"


export const Travel = (props)=>{
    return(
        <div className="main">
            
            <div className="image">
                <img src={props.image} />
            </div>
         <div className="about-travel">
            <div className="location">
            <span className="location-icon">{props.locationIcon}</span>
         <span>{props.location}</span>
            </div>
            <h1>{props.title}</h1>
            <div className="date">
            <span>{props.startDate}</span>
            <span>{props.endDate}</span>
            </div>
           
            <p>{props.description}</p>
            
        </div>
        </div>
        
    )

}