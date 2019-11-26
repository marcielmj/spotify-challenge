angular.module('spotify-challenge')
  .factory('LikedStorage', function () {

    function getItem(key) {
      var value = localStorage.getItem(key)
      return (value) ? JSON.parse(value) : []
    }

    function setItem(key, arr) {
      localStorage.setItem(key, JSON
        .stringify(arr.filter(function (value, index, self) {
          return self.indexOf(value) == index
        })
      ))
    }

    function likeArtist (artist) {
      var artists = getItem('artists')
      artists.push(artist)
      setItem('artists', artists)
    }

    function likeAlbum (album) {
      var albums = getItem('albums')
      albums.push(album)
      setItem('albums', albums)
    }

    function likeTrack (track) {
      var tracks = getItem('tracks')
      tracks.push(track)
      setItem('tracks', tracks)
    }

    function getArtists () {
      return getItem('artists')
    }

    function getAlbums () {
      return getItem('albums')
    }

    function getTracks () {
      return getItem('tracks')
    }

    return {
      likeArtist: likeArtist,
      likeAlbum: likeAlbum,
      likeTrack: likeTrack,

      getArtists: getArtists,
      getAlbums: getAlbums,
      getTracks: getTracks
    }

})
