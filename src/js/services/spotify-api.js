angular.module('spotify-challenge')
  .factory('SpotifyApi', ['$http', function ($http) {

    var rootApi = 'https://api.spotify.com/v1/search'
    var token = 'Bearer << __token__ >>'

    function searchArtist (q) {
      return $http.get(rootApi, {
        params: {
          q: q,
          type: 'artist'
        },
        headers: {
          Authorization: token
        }
      })
    }

    function searchAlbum (q) {
      return $http.get(rootApi, {
        params: {
          q: q,
          type: 'album'
        },
        headers: {
          Authorization: token
        }
      })
    }

    function searchTrack (q) {
      return $http.get(rootApi, {
        params: {
          q: q,
          type: 'track'
        },
        headers: {
          Authorization: token
        }
      })
    }
    return {
      searchArtist: searchArtist,
      searchAlbum: searchAlbum,
      searchTrack: searchTrack
    }
}])
