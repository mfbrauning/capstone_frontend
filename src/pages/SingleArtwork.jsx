import { useParams, useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import Modal from "../components/Modal"
import ArtworkForm from "../components/ArtworkForm"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
        <div className="single-artwork">
            <div className="single-artwork-left">
                <img src={artwork?.image}/>
                <br/>
                <EditIcon onClick={() => setOpen(true)}/>
                <DeleteIcon onClick={deleteArtwork}/>
            </div>
            <div className="single-artwork-right">
                <h2>{artwork?.title}</h2>
                <p>
                    <h4>ARTIST</h4>
                    <Link to={`/artists/${artwork?.artist.id}`}>{artwork?.artist.name}</Link>
                    <br/>
                    <h4>YEAR</h4>
                    {artwork?.year}
                    <br/>
                    <h4>MEDIUM</h4>
                    {artwork?.medium}
                    <br/>
                    <h4>LOCATION</h4>
                    <Link to={`/locations/${artwork?.location.id}`}>{artwork?.location.name}</Link>
                </p>
            </div>
            
            
            <Modal isOpen={isOpen} close={() => setOpen(false)}>
                <ArtworkForm artists={artists} locations={locations} initialArtwork={editArtwork} handleSubmit={updateArtworks} buttonLabel="Update" close={() => setOpen(false)}/>
            </Modal>
        </div>
    )
}

export default SingleArtwork