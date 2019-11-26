angular.module('spotify-challenge')
  .controller('album-list', ['$scope', 'SpotifyApi', function($scope, SpotifyApi) {

    $scope.albums = []

    function fnSearchAlbum (query) {
      SpotifyApi.searchAlbum(query).then(function (res) {
        $scope.albums = res.data.albums.items
      })
    }

    function fnDisplayArtist (artists) {
      return (artists.lenght > 1) ? 'Various Artists' : artists[0].name
    }

    $scope.searchAlbum = fnSearchAlbum
    $scope.displayArtist = fnDisplayArtist
}])
