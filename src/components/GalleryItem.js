import { useState } from 'react'
import { Link } from 'react-router-dom'

function GalleryItem(props){
    let [view, setView] = useState(false)
    //set style
    const simpleStyle = {
        'width': '25vw',
        'height': 'auto',
        'min-height':'200px',
        'border': '1px solid black',
        'margin': '2px',
        'vertical-align':'top'
    }
    
    const detailStyle = {
        'width': '25vw',
        'height': 'auto',
        'border': '1px solid black',
        'margin': '2px'
    }

    const simpleView = () => {
        return (
            <div id="simpleview" style={simpleStyle}>
                <h2>{props.item.trackName}</h2>
                <h4>{props.item.collectionName}</h4>
                <h4><a href={props.item.artistViewUrl}>{props.item.artistName}</a></h4>
                <p>
                    <button>View Details</button>
                </p>
            </div>
        )
    }

    const detailView = () => {
        return (
            <div id="detailview" style={detailStyle}>
                <h2>{props.item.trackName}</h2>
                <h3><Link to={`/artist/${props.item.artistId}`}>{props.item.artistName}</Link></h3>
                <p><Link to={`/album/${props.item.collectionId}`}>{props.item.collectionName}</Link></p>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
                
            </div>
        )
    }
    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem
