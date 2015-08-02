var albumsApp = angular.module('albumsApp', []);

// albumsApp.factory('albumFactory', function() {
// 	return {
// 		getAlbums: function () {
// 			return [{"artist": "Kid 606", "title": "Happiness"}, {"artist": "Kid 607", "title": "Sadness"}, {"artist": "Kid 609", "title": "Sloppiness"}];
// 		}
// 	};
// });

albumsApp.factory('albumFactory', function($http) {
	return {
		getalbumsAsync: function (callback) {
			$http.get ('albums.json').success(callback);
		}
	};
});

// albumsApp.controller('albumController', function($scope, albumFactory) {
// 	$scope.albums = albumFactory.getAlbums();
// 	console.log("controller");
// 	console.log($scope.albums[0]);
// });

albumsApp.controller('albumController', function($scope, albumFactory) {
	albumFactory.getalbumsAsync(function(results) {
		console.log('albumController async returned value');
		$scope.albums = results.albums;
		console.log("controller");
		// console.log($scope.albums[0]);
	});

	function byArtist ($scope) {
		$filter('orderBy')($scope.albums, album.artist);
		console.log($scope.albums[0]);
	};

});