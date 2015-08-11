(( $ = jQuery )=> {
    $( document ).on( 'show.bs.collapse hidden.bs.collapse' , ()=> {
        dectCollapse();
    } );

    dectCollapse();

    function dectCollapse() {
        setTimeout( ()=> {
            $( '.panel' ).each( function () {
                let $panel = $( this );
                if ( $panel.find( '.panel-collapse' ).attr( 'aria-expanded' ) === 'true' ) {
                    $panel.removeClass( 'yx-collapse-in' );
                } else {
                    $panel.addClass( 'yx-collapse-in' );
                }
            } );
        } , 0 );
    }
})();
