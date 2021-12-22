import { Link } from "react-router-dom";

function HomePage({artworks, artists, locations}){

    const artworkimg = Math.floor(Math.random()*artworks.length); 
    const artistimg = Math.floor(Math.random()*artists.length);
    const locationimg = Math.floor(Math.random()*locations.length)
    console.log('first' + artworkimg)
    console.log('second' + artworkimg)

    return (
        <div className="home-page">
            <div className="home-page-cards">
                <Link to={`/artworks/${artworks[artworkimg]?.id}`}><img src={artworks[artworkimg]?.image}/></Link>
                <br/>
                {artworks[artworkimg]?.title}
            </div>
            <div className="home-page-cards">
                <Link to={`/artists/${artists[artistimg]?.id}`} ><img src={artists[artistimg]?.image}/></Link>
                <br/>
                {artists[artistimg]?.name}
            </div>
            <div className="home-page-cards">
                <Link to={`/locations/${locations[locationimg]?.id}`} ><img src={locations[locationimg]?.image}/></Link>
                <br/>
                {locations[locationimg]?.name}
            </div>
        </div>
    )
}

export default HomePage