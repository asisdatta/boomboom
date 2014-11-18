'use strict';

module.exports = function($scope, $state, generateVideoId) {

    // shows/hides the playlist
    $scope.showPlaylist = function() {
        if ($scope.displayPlaylist) {
            $scope.displayPlaylist = false;
        } else {
            $scope.displayPlaylist = true;
            $('.playlist').height($(window).height() - 75);
            if (localStorage.getItem('playlist')) {
                $scope.playlist = JSON.parse(localStorage.getItem('playlist'));
            } else {
                $scope.noResult = true;
            }
        }
    };
    //loads video player and plays video 
    $scope.playVideo = function(video) {
        generateVideoId.setVideo(video);

        $state.go('app.player', {}, {
            reload: true
        });

    };
    //close the alert and playlist when there are no videos in  the list
    $scope.closeAlert = function(index) {
        $scope.displayPlaylist = false;
    };
    //remove an video from the playlist
    $scope.removeVideo = function(index) {
        $scope.playlist.splice(index, 1);
        localStorage.setItem('playlist', JSON.stringify($scope.playlist));
        if ($scope.playlist.length === 0) {
            $scope.noResult = true;
        }
    }
}
