import React from "react";
import './PlaylistList.css';
import { PlaylistListItem } from '../PlaylistListItem/PlaylistListItem';

export class PlaylistList extends React.Component {
    constructor(props) {
        super(props);
        this.selectPlaylist = this.selectPlaylist.bind(this);
        
    }
    selectPlaylist(id) {
        this.props.selectPlaylist(id)
    }
    render() {
        return (
            <div className="PlayList">
                {
                this.props.playlists.map( playlist => {
                    return <PlaylistListItem 
                    selectPlaylist={this.props.selectPlaylist} 
                    playlist={playlist} 
                    key={playlist.playlistId} 
                    name={playlist.name}
                    onSelect={this.props.selectPlaylist}
                    changeName={this.props.changeName}
                    />
                })
                }
            </div>
        )
    }
}