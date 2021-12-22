import Location from "../components/Location"
import Modal from "../components/Modal"
import LocationForm from "../components/LocationForm"
import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';

function AllLocations(props){
    const nullLocation = {
        name: "",
        type: "",
        city: "",
        country: "",
        website: "",
        image: ""
    }

    const addLocations = async (location) => {
        await fetch(props.locationURL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(location)
        })
        props.getLocations()
    }

    const [isOpen, setOpen] = useState(false)

    return (
        <div className="locations-main">
            <div className="add-location">
            <AddIcon onClick={() => setOpen(true)}/>
            <Modal isOpen={isOpen} close={() => setOpen(false)}>
                <h1>Add</h1>
                <LocationForm initialLocation={nullLocation} handleSubmit={addLocations} buttonLabel="add location" isOpen={isOpen} close={() => setOpen(false)}/>
            </Modal>
            </div>
            <div className="all-locations">
            {props.locations.map((location) => <Location location={location} key={location.id}/>)}
            </div>
        </div>
    )
}

export default AllLocations