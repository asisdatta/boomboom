'use strict';
var apiKey = require('../../../config').apiKey,
    api = require('../../../util/api');
module.exports = function($scope, $rootScope, $http, $state, generateVideoId) {
    $scope.searchKey = '';
    //find videoes from youtube api  
    $scope.findVideoes = function() {
        $http({ //get image urls from remote server
            url: api.search,
            method: 'GET',
            params: {
                part: 'snippet',
                q: $scope.searchKey,
                safeSearch: 'strict',
                type: 'video',
                order: 'viewCount',
                regionCode: 'IN',
                videoEmbeddable: true,
                maxResults: 30,
                key: apiKey
            }
        }).success(function(result) {
            if (result.pageInfo.totalResults === 0) {
                $scope.noResult = true;
            } else {
                $scope.videoList = result.items;
                localStorage.setItem("searchResult", JSON.stringify(result.items));
            }

        }).error(function() {
            //while any error occured
        });
    };
    //loads video player and plays video 
    $scope.playVideo = function(video) {
        generateVideoId.setVideo(video);
        $state.go('app.player');
    };
    $scope.closeAlert = function(index) {
        $scope.noResult = false;
    };
    if (localStorage.getItem('searchResult')) {
        $scope.videoList = JSON.parse(localStorage.getItem('searchResult'));
    } else {
        $scope.findVideoes();
    }
};
