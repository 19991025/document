$(function(){
    //////////////////////////////////
    
    // topBannner : lee 2022.03.17 수정
    function topBannerHandler() {
        // $('.topBannner').hide(); //display:none;
        $('.topBannner').slideUp();
    }
    $('.topBannner .container i').on('click', topBannerHandler);
    
    
    $('.visualSlide').slick({
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow: '    <div class="msLeft"></div>      ',
        nextArrow: '    <div class="msRight"></div>      '
    });
    
    
    // 슬라이드에 애니메이션...
    $('.visualSlide figure').eq(1).addClass('oo');
    $('.visualSlide').on('afterChange', function (e,s,c){
        $('.visualSlide figure').eq(c+1).addClass('oo').siblings().removeClass('oo');
        if (c===1) {
            $('.msLeft').addClass('oo')
        } else {
            $('.msLeft').removeClass('oo')
        }
    });
    
    //
    
    $('.eProductSlide').slick({
        arrows: false,
        autoplay: true, 
        autoplaySpeed: 1000,
    });
    
    
    $('.evenetProduct i:nth-of-type(1)').on('click', function(){
        $('.eProductSlide').slick('slickPause')
    });
    
    $('.evenetProduct i:nth-of-type(2)').on('click', function(){
        $('.eProductSlide').slick('slickPlay')
    });
    
    
    //
    
    $('.aproductSlide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        centerMode: true,
    });
    
    $('.allProduct i:first-child').on('click', function(){
        $('.aproductSlide').slick('slickPrev')
    });
    
    $('.allProduct i:last-child').on('click', function(){
        $('.aproductSlide').slick('slickNext')
    });
    
    
    $('.popup01 button').on('click', function() {
        $(this).parent().hide();
    });    
    
    $('.toTop').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop:0
        });
        return false;
    });
    
    $(window).on('scroll', function (){
        let sct = $(window).scrollTop();
        if (sct > 500) {
            $('.toTop').fadeIn(1000);
        }
        if (sct < 500 ) {
            $('.toTop').fadeOut(1000);
        }
    });
    
    
    
    
    
    
    
    //////////////////////////////////
    })
