import { useState } from "react"
import { useNavigate, useParams, Link } from "react-router-dom"
import ArtistForm from "../components/ArtistForm"
import Modal from "../components/Modal"

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
        movement: artist?.movement
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
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png" alt="artistplaceholder"/>
                <br/>
                <button onClick={() => setOpen(true)}>Edit Artist</button>
                <button onClick={deleteArtist}>Delete</button>
            </div>
            <div className="single-artist-right">
                <div>
                    <h3>{artist?.name}</h3>
                    <br/>
                    {artist?.nationality}
                    <br/>
                    {artist?.dob}
                    <br/>
                    {artist?.movement}
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