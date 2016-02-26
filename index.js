/* -----------------------------------------
   Scripts
   By Lauren Harkness
----------------------------------------- */

/* TOC ----------------------------------
:: Scrollspy
:: Smooth Scroll
:: Carousel
----------------------------------------- */


$(function(){

    "use strict";

    var topOffset = 50,
        numSlides = $('#us .item').length,
        randomSlide = Math.floor(Math.random() * numSlides),
        winHeight = $(window).height();


    /* Scrollspy ------------------------ */

    $('body').scrollspy({
        target: 'header .navbar',
        offset: topOffset
    });

    // use 'inbody' class to add background when not at the very top
    toggleInBody(this);

    $('.navbar-fixed-top').on('activate.bs.scrollspy', function(){ toggleInBody(this); });

    function toggleInBody(body){

        var hash = $(body).find('li.active a').attr('href');
        if (hash !== '#us'){ $('header nav').addClass('inbody'); }
        else { $('header nav').removeClass('inbody'); }
    }


    /* Smooth Scroll -------------------- */

    $('.navbar a[href*=#]:not([href=#])').click(function() {

        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length) {

                $('html, body').animate({ scrollTop: target.offset().top-topOffset+2 }, 500);
                return false;
            }
        }
    });

    
    /* Carousel ------------------------- */

    $('.carousel').carousel({
        interval: '10000',
        pause:    false
    });

    // count slide items and add thumbnails
    for (var i=0; i<numSlides; i++){

        var markup = '<li data-target="#us" data-slide-to="' + i + '"';
        if (i === randomSlide){ markup += ' class="active" '; }
        markup += '></li>';
        $('#us ol').append(markup);
    }

    // randomize first slide
    //$('#us .item').eq(randomSlide).addClass('active');

    // convert img to background-img for full window display
    //$('.fullheight').css('height', winHeight);
    /*
    $('#us .item img').each(function(){

        var imgSrc = $(this).attr('src');
        $(this).parent().css({ 'background-image': 'url('+ imgSrc +')' });
        $(this).remove();
    });

    $(window).resize(function(){
        winHeight = $(window).height();
        $('.fullheight').css('height', winHeight);
    });
    */
});
