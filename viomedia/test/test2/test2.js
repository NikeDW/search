var app = (function() {
    var urls = {};

    function addObject (url, callbackFunc) {
        if (!urls[url]) {
            urls[url] = {
                isRequest: false,
                queue: []
            };
        }
        urls[url].queue.push(callbackFunc);
        doRequest(url);
    }

    function log() {
        for (var i = 0; i < arguments.length; i++) {
            console.log(arguments[i])
        }
    }

    function doRequest(url) {
        if (urls[url].queue.length && !urls[url].isRequest) {
            urls[url].isRequest = true;
            $.getJSON(url, function(data) {
                urls[url].queue.shift()(parser(data));
                urls[url].isRequest = false;
                doRequest(url);
            }).error(function(e) {
                error(e);
                urls[url].queue.shift();
                urls[url].isRequest = false;
                doRequest(url);
            })
        }
    }

    function error(e) {
       log(e);
    }

    function parser(obj) {
        var element = $('<' + obj.tag + '>');

        if (obj.content) element.text(obj.content);
        element.attr(obj.attr);
        element.css(obj.style);

        if (obj.events) {
            Object.keys(obj.events).forEach(function (key) {
                element.bind(key, new Function(obj.events[key]));
            });
        }

        return element;
    }

    return {
        addObject: addObject,
        error: error,
        log: log
    }


})();
