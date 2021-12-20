import { Link } from 'react-router-dom'

function Artist({artist}){
    
    return (
        <div className='artist'>
            <Link to={`/artists/${artist.id}`}>
                <div className='artist-card'>{artist.name}</div>
            </Link>
        </div>
    )
}

export default Artist