$(document).ready(function() {
    var $window = $(window);
    var block1 = $('#block1');
    var line1_position = $('#line1').offset().top;
    var line2_position = $('#line2').offset().top;

    $window.scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll > line1_position) {
            block1.css({position: 'absolute'});
            if (scroll < line2_position - block1.height()) {
                block1.css({top: scroll});
            } else {
                block1.css({top: line2_position - block1.height()})
            }
        } else {
            block1.css({position: 'relative',
                top: 0});
        }

    });
});