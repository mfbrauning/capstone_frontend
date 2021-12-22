import { useState } from "react"

function LocationForm({initialLocation, handleSubmit, buttonLabel, close}){
    const [formData, setFormData] = useState(initialLocation)

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        close()
    }


    return (
        <form onSubmit={handleSubmission}>
            <input
                className="input"
                type="text"
                value={formData.name}
                name="name"
                placeholder="Name"
                onChange={handleChange}
            />
            <br/>
            <input
                className="input"
                type="text"
                value={formData.type}
                name="type"
                placeholder="Type"
                onChange={handleChange}
            />
            <br/>
            <input
                className="input"
                type="text"
                value={formData.city}
                name="city"
                placeholder="City"
                onChange={handleChange}
            />
            <br/>
            <input
                className="input"
                type="text"
                value={formData.country}
                name="country"
                placeholder="Country"
                onChange={handleChange}
            />
            <br/>
            <input
                className="input"
                type="text"
                value={formData.website}
                name="website"
                placeholder="Website URL"
                onChange={handleChange}
            />
            <br/>
            <input
                className="input"
                type="text"
                value={formData.image}
                name="image"
                placeholder="Image URL"
                onChange={handleChange}
            />
            <br/>
            <input className="submit" type="submit" value={buttonLabel}/>
        </form>
    )
}

export default LocationForm