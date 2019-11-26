angular.module('spotify-challenge')
  .controller('track-list', ['$scope', 'SpotifyApi', function ($scope, SpotifyApi) {

    $scope.tracks = []

    function fnSearchTrack (query) {
      SpotifyApi.searchTrack(query).then(function (res) {
        console.log(res.data)
        $scope.tracks = res.data.tracks.items
      })
    }

    function fnDisplayArtists (artists) {
      return artists
        .map(function (artist) { return artist.name })
        .reduce(function (names, name) { return names + ', ' + name })
    }

    $scope.searchTrack = fnSearchTrack
    $scope.displayArtists = fnDisplayArtists
}])
