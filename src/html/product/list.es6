$( document ).on( 'click' , '.yx-choose-item' , ( {target} )=> {
    $( target )
        .addClass( 'active' )
        .siblings()
        .removeClass( 'active' )
        .parents( '.yx-item' )
        .addClass( 'active' )
        .siblings()
        .removeClass( 'active' )
        .find( '.active' )
        .removeClass( 'active' );
} );
