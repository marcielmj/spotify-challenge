angular.module('spotify-challenge')
  .controller('artist-list', ['$scope', 'SpotifyApi', function ($scope, SpotifyApi) {

    $scope.artists = []

    function fnSearchArtist (query) {
      SpotifyApi.searchArtist(query).then(function (res) {
        $scope.artists = res.data.artists.items
      })
    }

    function fnPopularityTag (popularity) {
      if (popularity >= 80) {
        return "Hot"
      }

      if (popularity >= 60) {
        return "Cool"
      }

      if (popularity >= 30) {
        return "Regular"
      }

      return "Underground"
    }

    function fnDisplayGenres (genres) {
      return (genres.length >= 1)
        ? genres.reduce(function (names, name) { return names + ', ' + name })
        : ''
    }

    $scope.searchArtist = fnSearchArtist
    $scope.popularityTag = fnPopularityTag
    $scope.displayGenres = fnDisplayGenres
}])
