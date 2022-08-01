import { useState } from 'react'

function GalleryItem(props){
    let [view, setView] = useState(false)
    //set style
    const simpleStyle = {
        'width': '90%',
        'max-width':'250px',
        'height': 'auto',
        'border': '1px solid black',
        'margin': '0 5px',
        'padding': '5px'
    }
    
    const detailStyle = {
        'width': '80%',
        'height': 'auto',
        'border': '1px solid black',
        'margin': '0 5px',
        'padding': '5px'
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
                <h3>{props.item.collectionName}</h3>
                <h4>{props.item.primaryGenreName}</h4>
                <h4>{props.item.releaseDate}</h4>
                <p>
                    <img src={props.item.artworkUrl100} width="100px" />
                    <br />
                    <a href={props.item.trackViewUrl} target="_blank">
                        <button>Preview Song</button>
                    </a>
                </p>
            </div>
        )
    }
    return (
        <div onClick={() => setView(!view)} style={{'display': 'inline-block'}}>
            <p>One Gallery Item</p>
            {view ? detailView() : simpleView()}
        </div>
    )
}

export default GalleryItem
