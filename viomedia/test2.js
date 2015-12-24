var app = (function() {
    var queue = [];
    var current_request = false;

    function addObject (url, callbackFunc) {
        queue.push({
            url: url,
            callbakcFunc: callbackFunc
        });
        doRequest();
    }

    function doRequest() {

    }

    return {
       addObject: addObject
    }
}());