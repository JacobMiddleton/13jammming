import React from 'react';
import './PlaylistListItem.css';

export class PlaylistListItem extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        this.props.onSelect(this.props.playlist.playlistId, this.props.playlist.name);
        this.props.changeName(this.props.playlist.name);
    }
    render() {
        return (
            
            <div className='Playlist'  onClick={this.onClick}>
                <div className='Playlist-information'>
                <h3>{this.props.playlist.name}</h3>
                </div>
            </div>
        )
    }
}