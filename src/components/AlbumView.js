import {useEffect, useState} from 'react'
import {useParams, useHistory} from 'react-router-dom'

const AlbumView = (props) => {
    const { id } = useParams()
    const history = useHistory()
    const [ albumData, setAlbumData ] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            const API_URL = `http://localhost:4000/song/${id}`
            const response = await fetch(API_URL)
            const resData = await response.json()
            setAlbumData(resData.results)
        }
        fetchData()
    }, [id])

    const navButtons = () => {
        return (
            <div>
                <button onClick={() => {history.push('/')}}>Home</button> 
                | 
                <button onClick={() => history.goBack()}>Back</button>
            </div>
        )
    }

    const allAlbums =   albumData.filter(entity => entity.kind === 'song')
                        .map((album, i) => { 
                            return (
                                <div key={i}>{album.trackName}
                                </div>
                            )})

    return (
        <div>
            {albumData.length > 0 ? <h2>{albumData[0].collectionName}</h2> : <p>loading...</p>}
            {navButtons()}
            {allAlbums}
        </div>
    )
}

export default AlbumView