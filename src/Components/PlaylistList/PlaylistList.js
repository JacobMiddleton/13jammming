import React from "react"; 
import './PlaylistList.css';

export class PlaylistList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className='localplaylists'>
                <h2 className="h2">Local Playlists:</h2>
            </div>
        )
    }
}