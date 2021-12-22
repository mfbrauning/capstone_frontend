import { Link } from 'react-router-dom'

function Artwork({artwork}){
    return (
        <div className='artwork'>
            <Link to={`/artworks/${artwork.id}`}>
            <img src={artwork.image}/>
            </Link>
            <br/>
            <p>
            {artwork.artist.name}
            <br/>
            <i>{artwork.title}</i>, {artwork.year}
            </p>
        </div>
    )
}

export default Artwork