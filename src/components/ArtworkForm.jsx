import { useState } from "react"
import { useNavigate } from "react-router-dom"


function ArtworkForm({artworks, artists, locations, initialArtwork, handleSubmit, buttonLabel, isOpen, close}){
    const navigate = useNavigate()
    
    console.log(artworks)
    // form
    const [formData, setFormData] = useState(initialArtwork)

    // functions

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
                value={formData?.title}
                name="title"
                placeholder="title"
                onChange={handleChange}
            />
            <br/>
            <input
                className="input"
                type="number"
                value={formData?.year}
                name="year"
                placeholder="year"
                onChange={handleChange}
            />
            <br/>
            <input
                className="input"
                type="text"
                value={formData?.medium}
                name="medium"
                placeholder="medium"
                onChange={handleChange}
            />
            <br/>
            <input
                className="input"
                type="text"
                value={formData?.image}
                name="image"
                placeholder="image"
                onChange={handleChange}
            />
            <br/>
            <select name="artist" value={formData.artist} onChange={handleChange}>
                <option value="0">Select Artist</option> 
                {artists.map((artist) => <option value={artist?.id} key={artist?.id}>{artist?.name}</option>)}
            </select>
            <br/>
            <select name="location" value={formData.location} onChange={handleChange}>
                <option value="0">Select Location</option> 
                {locations.map((location) => <option value={location?.id} key={location?.id}>{location?.name}</option>)}
            </select>
            <br/>
            <input className="submit" type="submit" value={buttonLabel}/>
        </form>)
}

export default ArtworkForm
