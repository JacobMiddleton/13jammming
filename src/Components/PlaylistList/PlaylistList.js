import React from "react";
import './PlaylistList.css';
import { playlistListItem } from '../playlistListItem/playlistListItem';

export class PlaylistList extends React.Component {
    render() {
        return (
            <div> {
                this.props.playlists.map( playlist => {
                    return <playlistListItem playlistId={playlist.id} name={playlist.name}/>
                })
                }
            </div>
        )
    }
}