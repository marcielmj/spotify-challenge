angular.module('spotify-challenge')
  .controller('album-list', ['$scope', 'SpotifyApi', 'LikedStorage', function($scope, SpotifyApi, LikedStorage) {

    $scope.albums = []

    function fnSearchAlbum (query) {
      SpotifyApi.searchAlbum(query).then(function (res) {
        var likedAlbums = LikedStorage.getAlbums()

        $scope.albums = res.data.albums.items
          .map(function (item) {
            item.liked = likedAlbums.indexOf(item.id) >= 0
            return item
          })
      })
    }

    function fnDisplayArtist (artists) {
      return (artists.lenght > 1) ? 'Various Artists' : artists[0].name
    }

    function fnLikeAlbum (album) {
      album.liked = true
      LikedStorage.likeAlbum(album.id)
    }

    $scope.searchAlbum = fnSearchAlbum
    $scope.displayArtist = fnDisplayArtist
    $scope.likeAlbum = fnLikeAlbum
}])
