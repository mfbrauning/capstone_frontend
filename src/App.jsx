import { useState, useEffect } from "react"
import { Route, Routes } from 'react-router-dom'
import AllArtworks from "./pages/AllArtworks"
import SingleArtwork from "./pages/SingleArtwork"
import AllArtists from "./pages/AllArtists"
import SingleArtist from "./pages/SingleArtist"
import AllLocations from "./pages/AllLocations"
import SingleLocation from "./pages/SingleLocation"
import Header from "./components/Header"
import Footer from "./components/Footer"

function App() {

  // state and other variables

  const url = "https://desolate-bastion-62463.herokuapp.com/artworks/"

  const artistURL = "https://desolate-bastion-62463.herokuapp.com/artists/"

  const locationURL = "https://desolate-bastion-62463.herokuapp.com/locations/"

  const [artworks, setArtworks] = useState([])

  const [artists, setArtists] = useState([])

  const [locations, setLocations] = useState([])

  // functions

  const getArtworks = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setArtworks(data)
  }

  const getArtists = async () => {
    const response = await fetch(artistURL)
    const data = await response.json()
    setArtists(data)
  }

  const getLocations = async () => {
    const response = await fetch(locationURL)
    const data = await response.json()
    setLocations(data)
  }

  // useEffect
  useEffect(() => {
    getArtworks()
  }, [])

  useEffect(() => {
    getArtists()
  }, [])

  useEffect(() => {
    getLocations()
  }, [])

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/artworks" element={<AllArtworks locations={locations} artists={artists} artworks={artworks} getArtworks={getArtworks}/>}/>
        <Route path="/artworks/:id" element={<SingleArtwork locations={locations} artists={artists} artworks={artworks} getArtworks={getArtworks}/>} />
        <Route path="/artists" element={<AllArtists artistURL={artistURL} artists={artists} getArtists={getArtists}/>}/>
        <Route path="/artists/:id" element={<SingleArtist artistURL={artistURL} artists={artists} getArtists={getArtists}/>} />
        <Route path="/locations" element={<AllLocations locationURL={locationURL} locations={locations} getLocations={getLocations} />} />
        <Route path="/locations/:id" element={<SingleLocation locationURL={locationURL} locations={locations} getLocations={getLocations} />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
