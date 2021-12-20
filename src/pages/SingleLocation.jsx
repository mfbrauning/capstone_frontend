import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import Modal from "../components/Modal"
import LocationForm from "../components/LocationForm"


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
        website: location?.website
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
        <div>
            <h1>{location?.name}</h1>
            <h3>{location?.city}, {location?.country}</h3>
            <a href={location?.website} alt="website">Website</a>
            <div>
                {!location?.artworks ? "no image" : location?.artworks.map((artworks)=> <img key={artworks.id} src={artworks?.image}/>)}
            </div>
            <button onClick={() => setOpen(true)}>Edit</button>
            <button onClick={deleteLocation}>Delete</button>
            <Modal isOpen={isOpen} close={() => setOpen(false)}>
                <h1>Edit Location</h1>
                <br/>
                <LocationForm initialLocation={editLocation} handleSubmit={updateLocations} buttonLabel="update location" close={() => setOpen(false)}/>
            </Modal>
        </div>
    )
}

export default SingleLocation