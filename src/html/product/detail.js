'use strict';

(function () {
    var $ = arguments.length <= 0 || arguments[0] === undefined ? jQuery : arguments[0];

    var _$ = $('.yx-img-middle img');

    var bigImg = _$[0];

    $(document).on('click', '.yx-img-small', function (_ref) {
        var target = _ref.target;

        bigImg.src = target.src;
    });
})();