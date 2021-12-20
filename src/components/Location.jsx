import { Link } from "react-router-dom"

function Location({location}){
    return (
        <div>
            <Link to={`/locations/${location.id}`}>{location.name}</Link>
            <br/>
            {location.city}
        </div>
    )
}

export default Location