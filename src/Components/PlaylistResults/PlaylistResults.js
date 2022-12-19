import React from "react";
import { PlaylistList } from '../PlaylistList/PlaylistList';
import "./PlaylistResults.css";

export class PlaylistResults extends React.Component {
    constructor(props) {
        super(props);

    }
    componentWillMount() {
        this.props.getPlaylists();
    }
    render() {
        return (
            <div className='localplaylists'>
                <h2 className="h2">Local Playlists:</h2>
                <PlaylistList 
                selectPlaylist={this.props.selectPlaylist} 
                playlists={this.props.playlists}
                changeName={this.props.changeName}
                />
            </div>
        )
    }
}