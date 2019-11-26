angular.module('spotify-challenge')
  .controller('track-list', ['$scope', 'SpotifyApi', 'LikedStorage', function ($scope, SpotifyApi, LikedStorage) {

    $scope.tracks = []

    function fnSearchTrack (query) {
      var likedTracks = LikedStorage.getTracks()

      SpotifyApi.searchTrack(query).then(function (res) {
        $scope.tracks = res.data.tracks.items
          .map(function (item) {
            item.liked = likedTracks.indexOf(item.id) >= 0
            return item
          })
      })
    }

    function fnDisplayArtists (artists) {
      return artists
        .map(function (artist) { return artist.name })
        .reduce(function (names, name) { return names + ', ' + name })
    }

    function fnLikeTrack (track) {
      track.liked = true
      LikedStorage.likeTrack(track.id)
    }

    $scope.searchTrack = fnSearchTrack
    $scope.displayArtists = fnDisplayArtists
    $scope.likeTrack = fnLikeTrack
}])
