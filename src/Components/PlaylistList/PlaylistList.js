import React from "react"; 
import './PlaylistList.css';

export class PlaylistList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playlists: []
        };
    }
    componentWillMount() {
        this.setState({
            playlists: this.props.getPlaylists()
        })
    }
    render() {
        return(
            <div className='localplaylists'>
                <h2 className="h2" onClick={this.props.getPlaylists}>Local Playlists:</h2>
                
            </div>
        )
    }
}