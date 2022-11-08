import './App.css';
import React from 'react';


class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = { 
      searchResults:[
        {name:'name1', artist:'artist1', album:'album1', id:'1'}, 
      {name:'name2', artist:'artist2', album:'album2', id:'2'},
      {name:'name3', artist:'artist3', album:'album3', id:'3'}
    ] 
    },{
      playlistName: 'My Playlist'
    },
    {
      playlistTracks:[
        {name:'playlist1', artist:'myartist1', album:'myalbum1', id:'1.1'},
        {name:'playlist2', artist:'myartist2', album:'myalbum2', id:'1.2'},
        {name:'playlist3', artist:'myartist3', album:'myalbum3', id:'1.3'}
      ]
    }
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }
  
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track)
    this.setState({ playlistTracks: tracks})
  }
  
  removeTrack(track) {
    this.setState({playlistTracks: this.state.people.filter(function(item) { 
      return item !== track.id 
  })});
  }
  updatePlaylistName(name) {
    this.setState({ playlistName: name })
  }
  savePlaylist() {
    const trackURIs = [];
    this.state.playlistTracks.array.map(track => {
      track.uri
    });
  }
  render() {
    return (
      <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    {/* <SearchBar /> */}
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack()}/> 
      <Playlist 
      playlistName={this.state.playlistName} 
      playlistTracks={this.state.playlistTracks} 
      onRemove={this.removeTrack}
      onNameChange={this.updatePlaylistName}
  />
    </div>
  </div>
</div>
    )
  }
}

export default App;
