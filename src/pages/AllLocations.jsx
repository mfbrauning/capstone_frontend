import Location from "../components/Location"
import Modal from "../components/Modal"
import LocationForm from "../components/LocationForm"
import { useState } from "react"

function AllLocations(props){
    const nullLocation = {
        name: "",
        type: "",
        city: "",
        country: "",
        website: ""
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
        <div>
            <h1>Museums and Galleries</h1>
            <button onClick={() => setOpen(true)}>Add</button>
            <Modal isOpen={isOpen} close={() => setOpen(false)}>
                <h1>Add</h1>
                <LocationForm initialLocation={nullLocation} handleSubmit={addLocations} buttonLabel="add location" isOpen={isOpen} close={() => setOpen(false)}/>
            </Modal>
            {props.locations.map((location) => <Location location={location} key={location.id}/>)}
        </div>
    )
}

export default AllLocations