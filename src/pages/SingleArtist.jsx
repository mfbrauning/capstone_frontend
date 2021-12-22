import { useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import ArtistForm from "../components/ArtistForm"
import Modal from "../components/Modal"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function SingleArtist(props){
    const navigate = useNavigate()
    const params = useParams()
    const id = parseInt(params.id)
    const artists = props.artists
    const artist = artists.find((artist) => artist.id === id)
    const editArtist = {
        name: artist?.name,
        nationality: artist?.nationality,
        dob: artist?.dob,
        movement: artist?.movement,
        image: artist?.image
    }

    const [isOpen, setOpen] = useState(false)

    const updateArtists = async (artist) => {
        await fetch(props.artistURL + id + "/", {
            method: "put",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(artist)
        })
        props.getArtists()
    }

    const deleteArtist = async (artist) => {
        await fetch(props.artistURL + id + "/", {
            method: "delete"
        })
        props.getArtists()
        navigate("/artists")
    }

    return (
        <div className="single-artist">
            <div className="single-artist-left">
                <img src={artist?.image} alt={artist?.name}/>
                <br/>
                <div>
                <EditIcon onClick={() => setOpen(true)}/>
                <DeleteIcon onClick={deleteArtist}/>
                </div>
            </div>
            <div className="single-artist-right">
                <div>
                <h2>{artist?.name}</h2>
                <p>
                    <h4>NATIONALITY</h4>
                    {artist?.nationality}
                    <br/>
                    <h4>BORN</h4>
                    {artist?.dob}
                    <br/>
                    <h4>MOVEMENT</h4>
                    {artist?.movement}
                </p>
                </div>
                <div className="artist-artwork">
                    {!artist?.artworks? "noimage" : artist?.artworks.map((artworks) => <Link to={`/artworks/${artworks?.id}`} key={artworks?.id}><img key={artworks.id} src={artworks?.image}/></Link>)}
                </div>
            </div>
            <br/>
            
            <Modal isOpen={isOpen} close={() => setOpen(false)}>
                <h1>Edit Artist</h1>
                <br/>
                <ArtistForm initialArtist={editArtist} handleSubmit={updateArtists} buttonLabel="update artist" close={() => setOpen(false)}/>
            </Modal>
        </div>
    )
}

export default SingleArtist