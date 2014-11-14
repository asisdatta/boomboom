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

    //loads video player and plays video 
    $scope.playVideo = function(video) {
        generateVideoId.setVideo(video);
        $state.go('app.player');
    };
}
