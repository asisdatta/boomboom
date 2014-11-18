'use strict';
var apiKey = require('../../../config').apiKey,
    api = require('../../../util/api');
module.exports = function($scope, $rootScope, $http, generateVideoId) {

    // 3. This function creates an <iframe> (and YouTube player)
    //    after the API code downloads.
    var player,
        done = false,
        video = generateVideoId.getVideo(),
        videoId = video.id.videoId || video.id;
    $scope.title = video.snippet.title;
    (function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: videoId,
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    })();

    // 4. The API will call this function when the video player is ready.
    function onPlayerReady(event) {
        event.target.playVideo();
    }

    // 5. The API calls this function when the player's state changes.
    //    The function indicates that when playing a video (state=1)

    function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
            done = true;
        }
    }

    function stopVideo() {
        player.stopVideo();
    }
};
