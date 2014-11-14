'use strict';

module.exports = function($scope, $state) {

    if (localStorage.getItem('searchResult')) {
        $scope.playlist = JSON.parse(localStorage.getItem('searchResult'));
    } else {
        $scope.noResult = true;
    }
    //loads video player and plays video 
    $scope.playVideo = function(video) {
        generateVideoId.setVideo(video);
        $state.go('app.player');
    };
}
