import React from 'react';
import './PlaylistListItem.css';

export class PlaylistListItem extends React.Component {
    render() {
        return (
            <div className='Playlist'  onClick={ () => this.props.onSelect(this.props.playlist.playlistId) }>
                <div className='Playlist-information'>
                <h3>{this.props.playlist.name}</h3>
                </div>
            </div>
        )
    }
}