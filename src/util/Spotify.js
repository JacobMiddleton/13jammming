let accessToken;
const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }

        // check for access token 
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

        if(accessTokenMatch && expiresIn) {
            accessToken = accessToken;
            const experationTime = expiresIn;
            window.setTimeout(() => accessToken = '', expiresIn * experationTime);
            window.history.pushState('Access Token', null, '/');
        }
    }
};

export default Spotify;