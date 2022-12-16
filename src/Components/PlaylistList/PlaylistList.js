import React from "react";
import './PlaylistList.css';
import { PlaylistListItem } from '../PlaylistListItem/PlaylistListItem';

export class PlaylistList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="PlayList">
                {
                this.props.playlists.map( playlist => {
                    return <PlaylistListItem playlist={playlist} key={playlist.playlistId} name={playlist.name}/>
                })
                }
            </div>
        )
    }
}