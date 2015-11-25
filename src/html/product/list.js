'use strict';

$(document).on('click', '.yx-choose-item', function (_ref) {
    var target = _ref.target;

    $(target).addClass('active').siblings().removeClass('active').parents('.yx-item').addClass('active').siblings().removeClass('active').find('.active').removeClass('active');
});