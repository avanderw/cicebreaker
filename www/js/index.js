var data = {iceBreaker: {current: "", previous: "", all: []}};
data.iceBreaker.select = function () {
    var rndm = Math.round((Math.random() * data.iceBreaker.all.length));
    data.iceBreaker.previous = data.iceBreaker.current;
    data.iceBreaker.current = data.iceBreaker.all[rndm];
};
data.iceBreaker.selectPrev = function () {
    if (data.iceBreaker.previous) {
        var tmp = data.iceBreaker.current;
        data.iceBreaker.current = data.iceBreaker.previous;
        data.iceBreaker.previous = tmp;
    }
};

rivets.bind($("body"), data);

$.ajax({
    dataType: "json",
    url: "data/ice-breaker.json",
    success: function (response) {
        data.iceBreaker.all = response;
        data.iceBreaker.select();
    }
});

var hammertime = new Hammer(document.body);
hammertime.on('swiperight', data.iceBreaker.selectPrev);
hammertime.on('swipeleft', data.iceBreaker.select);
hammertime.on('tap', data.iceBreaker.select);