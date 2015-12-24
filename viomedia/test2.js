var app = (function() {
    var queue = [];
    var current_request = false;

    function addObject (url, callbackFunc) {
        queue.push({
            url: url,
            callbackFunc: callbackFunc
        });
        doRequest();
    }

    function doRequest() {
        var request;
        if (!current_request && queue.length) {
            request = queue.shift();
            $.getJSON(url, function(data) {
                request.callbackFunc(parser(data));
                doRequest();
            }).error(function(e) {
                error(e);
                doRequest();
            })
        }
    }

    function error(e) {
        console.log(e);
    }

    function parser(obj) {
        var element = $(obj.tag);

        if (obj.content) element.text(obj.content);
        element.attr(obj.attr);
        element.css(obj.style);

        if (obj.events) {
            Object.keys(obj.events).forEach(function(key) {
                element.bind(key, new Function(obj.events[key]));
            });
        }

        return element;
    }

    return {
       addObject: addObject
    }
}());