import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'

function App() {
  let [searchTerm, setSearchTerm] = useState('')
  let [data, setData] = useState([])
  let [message, setMessage] = useState('Search for Music!')

  const API_URL = `https://itunes.apple.com/search?term=`

  function toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  useEffect(() => {
    if (searchTerm) {
      document.title=`${searchTerm} Music`
      setMessage(`Search Results for: ${searchTerm}` )
      const fetchData = async () => {
        const response = await fetch(API_URL + searchTerm)
        const resData = await response.json()
        if(resData.results.length > 0) {
          setData(resData.results)
        } else {
          setMessage('Not Found')
        }
      }
      fetchData()
  }
  }, [searchTerm, API_URL])

  const handleSearch = (e, term) => {
    e.preventDefault()
    term = toTitleCase(term)
    setSearchTerm(term)
    return (<Redirect to="/" />)
  }

  return (
    <div className="App">
      <strong>{message}</strong>
      <Router>
        <Route exact path="/">
          <SearchBar handleSearch={handleSearch} />
          <Gallery data={data} />
        </Route>
        <Route path="/album/:id">
          <AlbumView term={searchTerm} />
        </Route>
        <Route path="/artist/:id">
          <ArtistView term={searchTerm} />
        </Route>
      </Router>
    </div>
  );
}

export default App;