angular.module('spotify-challenge')
  .controller('artist-list', ['$scope', 'SpotifyApi', 'LikedStorage', function ($scope, SpotifyApi, LikedStorage) {

    $scope.artists = []

    function fnSearchArtist (query) {
      var likedArtists = LikedStorage.getArtists()

      SpotifyApi.searchArtist(query).then(function (res) {
        $scope.artists = res.data.artists.items
          .map(function (item) {
            item.liked = likedArtists.indexOf(item.id) >= 0
            return item
          })
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

    function fnLikeArtist (artist) {
      artist.liked = true
      LikedStorage.likeArtist(artist.id)
    }

    $scope.searchArtist = fnSearchArtist
    $scope.popularityTag = fnPopularityTag
    $scope.displayGenres = fnDisplayGenres
    $scope.likeArtist = fnLikeArtist
}])
