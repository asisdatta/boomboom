'use strict';
module.exports = {
    //filter to get the time formated
    duration: function() {
        return function(time) {
            var arr = time.match(new RegExp('PT(\\d*)M*(\\d*)'));
            if (arr[2] === '') {
                return ("0:" + arr[1]);
            } else {
                return (arr[1] + ':' + arr[2] || time);
            }
        };
    }
};
