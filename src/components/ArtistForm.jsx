import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


function ArtistForm({initialArtist, handleSubmit, buttonLabel, close}){

    const [formData, setFormData] = useState(initialArtist)

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
                type="text"
                value={formData.name}
                name="name"
                placeholder="Name"
                onChange={handleChange}
            />
            <br/>
            <input
                type="text"
                value={formData.nationality}
                name="nationality"
                placeholder="nationality"
                onChange={handleChange}
            />
            <br/>
            <input
                type="text"
                value={formData.dob}
                name="dob"
                placeholder="date of birth"
                onChange={handleChange}
            />
            <br/>
            <input
                type="text"
                value={formData.movement}
                name="movement"
                placeholder="movement"
                onChange={handleChange}
            />
            <br/>
            <input
                type="text"
                value={formData.image}
                name="image"
                placeholder="Artist Image URL"
                onChange={handleChange}
            />
            <input type="submit" value={buttonLabel}/>
        </form>
        )
    
}

export default ArtistForm