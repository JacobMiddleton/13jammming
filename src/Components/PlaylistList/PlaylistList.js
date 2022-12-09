import React from "react"; 
import './PlaylistList.css';

export class PlaylistList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className='Playlist'>
                <h1 className="h1">Local Playlists:</h1>
            </div>
        )
    }
}