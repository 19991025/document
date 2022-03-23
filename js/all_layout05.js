$(function(){
    /////////////////////////////////
    // $('선택').on('이벤트', 할일)
    // 일 => function 일() {}
    
    // $(this)  나
    // $(this).index()  idx
    
    function tabMenu() {
        var idx = $(this).index(); //0,1,2,3
        $('.tabLink li').removeClass('active');
        $(this).addClass('active');
        $('.tabContent>div').removeClass('active');
        $('.tabContent>div').eq(idx).addClass('active');
        // $('.tabContent>div').eq(idx).addClass('active').siblings().removeClass('active');
    }
    
    $('.tabLink li').on('click', tabMenu);
    
    $('.topBannerToggle .inner').on('click', function(){
        $(this).toggleClass('active');
        $('.headerWrap .container').slideToggle();
    });
    
    // $('.bgFixed').on('mouseenter', function(){
    //     $('.footerWap').hide();
    // });
    
    // $('.bgFixed').on('mouseleave', function(){
    //     $('.footerWap').show();
    // });
    
    $('.bgFixed').hover(
        function(){
            $('.footerWap').hide();
        },
        function(){
            $('.footerWap').show();
        }
    )
    
    
    
    //////////////////////////////////
    })
