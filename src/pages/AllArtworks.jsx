import Artwork from "../components/Artwork"
import Modal from "../components/Modal"
import ArtworkForm from "../components/ArtworkForm"
import { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';

function AllArtworks(props){
    const nullArtwork = {
        title: "",
        year: "",
        medium: "",
        image: "",
        artist: "",
        location: ""
    }

    const artworks = props.artworks
    const artists = props.artists
    const locations = props.locations

    const addURL = "https://desolate-bastion-62463.herokuapp.com/artworksedit/"

    const addArtworks = async (artwork) => {
        await fetch(addURL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(artwork)
        })
        props.getArtworks()
    }

    const [isOpen, setOpen] = useState(false)

    return (
        <div className="artworks-main">
            <div className="add-artwork">
            <AddIcon onClick={() => setOpen(true)}/>
            <Modal isOpen={isOpen} close={() => setOpen(false)}>
                <h1>Add Artwork</h1>
                <ArtworkForm locations={locations} artists={artists} artworks={artworks} initialArtwork={nullArtwork} handleSubmit={addArtworks} buttonLabel="create artwork" isOpen={isOpen} close={() => setOpen(false)}/>
            </Modal>
            </div>
        <div className="all-artworks">
            {props.artworks.map((artwork) => <Artwork artwork={artwork} key={artwork.id}/> )}
            <div>
           
            </div>
        </div>
        </div>
    )
}

export default AllArtworks