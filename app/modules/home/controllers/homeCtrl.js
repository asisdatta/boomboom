'use strict';
var config = require('../../../config'),
    api = require('../../../util/api'),
    apiKey = config.apiKey;

module.exports = function($scope, $http, $state, generateVideoId) {
    $scope.categoryList = config.categoryList;
    _.each($scope.categoryList, function(category) {
        $http({ //get image urls from remote server
            url: api.videos,
            method: 'GET',
            params: {
                part: 'snippet,contentDetails,statistics',
                chart: 'mostPopular',
                regionCode: 'IN',
                videoCategoryId: category.id,
                maxResults: 6,
                key: apiKey
            }
        }).success(function(result) {
            category.videoList = result.items;
        }).error(function() {
            //while any error occured
        });
    });
    //adds to playlist in local storage 
    $scope.addToPlaylist = function(video) {
        var playlist = [],
            flag = true;
        if (localStorage.getItem('playlist')) {
            playlist = JSON.parse(localStorage.getItem('playlist'));
            playlist.forEach(function(item) {
                var videoId = item.id.videoId || item.id;
                if (videoId === video.id) {
                    flag = false;
                }
            });
            if (flag) {
                playlist.push(video);
                localStorage.setItem('playlist', JSON.stringify(playlist));
                $scope.added = true;
                setTimeout(function() {
                    $scope.added = false;
                    $scope.$apply();
                }, 2000);
            } else {
                $scope.alreadyExists = true;
                setTimeout(function() {
                    $scope.alreadyExists = false;
                    $scope.$apply();
                }, 2000);
            }
        }
    };
    //loads video player and plays video 
    $scope.playVideo = function(video) {
        generateVideoId.setVideo(video);
        $state.go('app.player');
    };
    //close the alerty 
    $scope.closeAlert = function() {
        $scope.added = false;
    };
}
