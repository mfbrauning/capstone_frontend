import { Link } from 'react-router-dom'

function Artwork({artwork}){
    return (
        <div>
            <Link to={`/artworks/${artwork.id}`}>
            {artwork.title}
            </Link>
            <br/>
            {artwork.year}
            <br/>
            {artwork.medium}
            <br/>
            <img src={artwork.image}/>
            <br/>
            {artwork.artist.name}
            <br/>
            {artwork.location.name}
        </div>
    )
}

export default Artwork