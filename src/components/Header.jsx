import { Link } from "react-router-dom"

function Header(props){
    return (
        <div className="nav">
            <div>
                <Link to="/">Home</Link>
            </div>
            <br/>
            <div>
                <Link to="/artworks">Artworks</Link>
            </div>
            <br/>
            <div>
                <Link to="/artists">Artists</Link>
            </div>
            <br/>
            <div>
                <Link to="/locations">Locations</Link>
            </div>
        </div>
    )
}

export default Header