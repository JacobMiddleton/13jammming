const clientId = '0626a4befcf84b89aba32a2d3241ed2c';
const redirectURI = "http://localhost:3000/";
let accessToken;

const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }

        // check for access token 
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresInMatch) {
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }
        else {
            const redirectURL = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
            window.location = redirectURL;
        }
    },
    search(searchTerm) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${searchTerm}`, { 
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
         }).then(response => {
            return response.json();
         }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return [];
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id, 
                     name: track.name, 
                     artist: track.artists[0].name, 
                     album: track.album.name, 
                     uri: track.uri    
            }));
         });
         //.then(response => {
        //     console.log(response);

        //     const jsonResult = response.json();
        //     if(!jsonResult.tracks) {
        //         return [];
        //     }

        //     const tracks = jsonResult.tracks.items.map(track => { 
        //         return {
        //             Id: track.id, 
        //             Name: track.name, 
        //             Artist: track.artists[0].name, 
        //             Album: track.album.name, 
        //             URI: track.uri    
        //         }
        //     });

        //     return tracks;
        // });
    }
};

export default Spotify;