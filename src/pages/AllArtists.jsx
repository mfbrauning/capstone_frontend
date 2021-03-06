import Artist from "../components/Artist"
import Modal from "../components/Modal"
import ArtistForm from "../components/ArtistForm"
import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';

function AllArtists(props){
    
    const nullArtist = {
        name: "",
        nationality: "",
        dob: "",
        movement: "",
        image: ""
    }

    const addArtists = async (artist) => {
        await fetch(props.artistURL, {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(artist)
        })
        props.getArtists()
    }

    const [isOpen, setOpen] = useState(false)



    return (
        <div className="all-artists">
            <div >
            <Modal isOpen={isOpen} close={() => setOpen(false)}>
                <ArtistForm initialArtist={nullArtist} handleSubmit={addArtists} buttonLabel="Add" isOpen={isOpen} close={() => setOpen(false)}/>
            </Modal>
            {props.artists.map((artist) => <Artist artist={artist} key={artist.id}/> )}
            </div>
            <div className="add-artist">
            <AddIcon onClick={() => setOpen(true)}/>
            </div>
        </div>
    )
}

export default AllArtists 