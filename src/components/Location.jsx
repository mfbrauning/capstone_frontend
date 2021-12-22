import { Link } from "react-router-dom"

function Location({location}){
    return (
        <div className="location">
            <Link to={`/locations/${location.id}`}><img src={location.image} alt={location.name}/></Link>
            <br/>
            <p>
            {location.name}
            <br/>
            <small>{location.city}, {location.country}</small>
            </p>
        </div>
    )
}

export default Location