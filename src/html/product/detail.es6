(( $ = jQuery )=> {
    let {0:bigImg} = $( '.yx-img-middle img' );
    $( document ).on( 'click' , '.yx-img-small' , ( {target} ) => {
        bigImg.src = target.src;
    } );
})();
