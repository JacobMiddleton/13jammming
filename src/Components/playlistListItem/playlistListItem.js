import React from 'react';
import './PlaylistListItem.css';

export class PlaylistListItem extends React.Component {
    render() {
        return (
            <div className='Playlist'>
                <div className='Playlist-information'>
                <h3>{this.props.playlist.name}</h3>
                </div>
            </div>
        )
    }
}