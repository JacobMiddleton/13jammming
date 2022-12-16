import React from "react";
import { PlaylistList } from '../PlaylistList/PlaylistList';

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
                <PlaylistList playlists={this.props.playlists}/>
            </div>
        )
    }
}