'use strict';

(function () {
    var $ = arguments.length <= 0 || arguments[0] === undefined ? jQuery : arguments[0];

    $(document).on('show.bs.collapse hidden.bs.collapse', function () {
        dectCollapse();
    });

    dectCollapse();

    function dectCollapse() {
        setTimeout(function () {
            $('.panel').each(function () {
                var $panel = $(this);
                if ($panel.find('.panel-collapse').attr('aria-expanded') === 'true') {
                    $panel.removeClass('yx-collapse-in');
                } else {
                    $panel.addClass('yx-collapse-in');
                }
            });
        }, 0);
    }
})();