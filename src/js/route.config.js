angular.module('spotify-challenge')
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/artist', {
        templateUrl: 'templates/artist-list.html',
        controller: 'artist-list'
      })
      .when('/album', {
        templateUrl: 'templates/album-list.html',
        controller: 'album-list'
      })
      .when('/track', {
        templateUrl: 'templates/track-list.html',
        controller: 'track-list'
      })
      .otherwise({ redirectTo: '/artist' })
  }])
