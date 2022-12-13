import { Playlist } from "../Components/Playlist/Playlist";
import { PlaylistList } from "../Components/PlaylistList/PlaylistList"

const clientId = '0626a4befcf84b89aba32a2d3241ed2c';
const redirectURI = "http://localhost:3000";
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken;
        }

        // check for access token 
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if (accessTokenMatch && expiresInMatch) {
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
    },
    savePlaylist(name, trackUris) {
        
        if (!name || !trackUris.length) {
            return;
        }
       
        const accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };
        let userId;

        return fetch('https://api.spotify.com/v1/me', { headers: headers }
            ).then(response => response.json()
            ).then(jsonResponse => {
                userId = jsonResponse.id;
            

        return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            headers: headers,
            method: 'POST',
            body: JSON.stringify({ name: name })
        }).then(response => response.json()
        ).then(jsonResponse => {
            const playlistId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                headers: headers,
                method: 'POST',
                body: JSON.stringify({ uris: trackUris })
            })
        })
    })
    },
    // getCurrentUserId() {

    //     const accessToken = Spotify.getAccessToken();
    //     const headers = { Authorization: `Bearer ${accessToken}` };

    //     if (userId) {
    //         const myExecutor = (resolve, reject) => {
    //             if (userId) {
    //                 resolve(userId);
    //             } else {
    //                 reject("something went wrong!!!");
    //             }
    //         };
    //         const getUserId = () => {
    //             const promise = new Promise(myExecutor);
    //             return promise;
    //         };
    //         const userPromise = getUserId();
    //         console.log(userPromise);
    //     }
    //     else {
    //         return fetch('https://api.spotify.com/v1/me', { headers: headers }
    //         ).then(response => response.json()
    //         ).then(jsonResponse => {
    //             userId = jsonResponse.id;
    //         });
    //     }
    //     return userId;
    // },
    getUserPlaylists() {
        const accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };
        let userId; 

        return fetch('https://api.spotify.com/v1/me', { headers: headers }
        ).then(response => response.json()
        ).then(jsonResponse => {
            userId = jsonResponse.id;
            return fetch(`https://api.spotify.com/v1/users/${userId}/playlists `, { headers: headers })
            .then(
                jsonResponse => {
                if (!jsonResponse.items) {
                    return [];
                }
                return jsonResponse.items.map(item => ({
                    playlistId: item.id, 
                    name: item.name
                }));
            });
        })
    }
};

export default Spotify;