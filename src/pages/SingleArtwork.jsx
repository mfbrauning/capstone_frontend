import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import Modal from "../components/Modal"
import ArtworkForm from "../components/ArtworkForm"

function SingleArtwork(props){
    const navigate = useNavigate()
    const params = useParams()
    const id = parseInt(params.id)
    const artworks = props.artworks
    const artwork = artworks.find((artwork) => artwork.id === id)
    console.log(artwork?.location.id)
    const artists = props.artists
    const locations = props.locations

    const addURL = "https://desolate-bastion-62463.herokuapp.com/artworksedit/"

    const editArtwork = {
        title: artwork?.title,
        year: artwork?.year,
        medium: artwork?.medium,
        image: artwork?.image,
        artist: artwork?.artist.id,
        location: artwork?.location.id
    }

    const [isOpen, setOpen] = useState(false)

    const updateArtworks = async (artwork) => {
        await fetch(addURL + id + "/", {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(artwork)
        })
        props.getArtworks()
    }

    const deleteArtwork = async (artwork) => {
        await fetch(addURL + id + "/", {
            method: "delete"
        })
        props.getArtworks()
        navigate("/artworks")
    }


    return (
        <div>
            {artwork?.title}
            <br/>
            <img src={artwork?.image}/>
            <br/>
            {artwork?.artist.name}
            <br/>
            {artwork?.year}
            <br/>
            {artwork?.medium}
            <br/>
            {artwork?.location.name}
            <br/>
            <button onClick={() => setOpen(true)}>Edit Artwork</button>
            <button onClick={deleteArtwork}>Delete</button>
            <Modal isOpen={isOpen} close={() => setOpen(false)}>
                <h1>Edit Artwork</h1>
                <br/>
                <ArtworkForm artists={artists} locations={locations} initialArtwork={editArtwork} handleSubmit={updateArtworks} buttonLabel="update artwork" close={() => setOpen(false)}/>
            </Modal>
        </div>
    )
}

export default SingleArtwork