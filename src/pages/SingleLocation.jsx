import { useParams, useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import Modal from "../components/Modal"
import LocationForm from "../components/LocationForm"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


function SingleLocation(props){
    const navigate = useNavigate()
    const params = useParams()
    const id = parseInt(params.id)
    const locations = props.locations
    const location = locations.find((location) => location.id === id)
    const editLocation = {
        name: location?.name,
        type: location?.type,
        city: location?.city,
        country: location?.country,
        website: location?.website,
        image: location?.image
    }

    const [isOpen, setOpen] = useState(false)

    const updateLocations = async (location) => {
        await fetch(props.locationURL + id + "/", {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
        props.getLocations()
    }

    const deleteLocation = async (location) => {
        await fetch(props.locationURL + id + "/", {
            method: "delete"
        })
        props.getLocations()
        navigate("/locations")
    }

    return (
        <div className="single-location">
            <div className="single-location-left">
                <img src={location?.image} alt={location?.name}/>
                <br/>
                <div>
                <EditIcon onClick={() => setOpen(true)}/>
                <DeleteIcon onClick={deleteLocation}/>
                </div>
            </div>
            <div className="single-location-right">
            
                <div>
                <h2>{location?.name}</h2>
                <p>
                    <h4>LOCATION</h4>
                    {location?.city}, {location?.country}
                    <br/>
                    <h4>WEBSITE</h4>
                    <a href={location?.website} target="_blank">{location?.website}</a>
                </p>
                </div>
                <div className="location-images">
                {!location?.artworks? "noimage" : location?.artworks.map((artworks) => <Link to={`/artworks/${artworks?.id}`} key={artworks?.id}><img key={artworks.id} src={artworks?.image}/></Link>)}   
                </div>
            </div>
            
            
            <Modal isOpen={isOpen} close={() => setOpen(false)}>
                <h1>Edit Location</h1>
                <br/>
                <LocationForm initialLocation={editLocation} handleSubmit={updateLocations} buttonLabel="update location" close={() => setOpen(false)}/>
            </Modal>
        </div>
    )
}

export default SingleLocation