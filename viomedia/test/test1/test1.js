$(document).ready(function() {
    var $window = $(window);
    var $block1 = $('.standard-block');
    var $line = $('.line');
    var line1_position = $($line[0]).offset().top;
    var line2_position = $($line[1]).offset().top;

    $window.scroll(function() {
        var scroll = $window.scrollTop();
        if (scroll > line1_position) {
            if (scroll < line2_position - $block1.height()) {
                $block1.addClass('fixed-block').removeClass('stopped-block')
            } else {
                $block1.addClass('stopped-block').removeClass('fixed-block')
            }
        } else {
            $block1.removeClass('stopped-block').removeClass('fixed-block')
        }

    });
});