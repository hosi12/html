$(function(){
    //영상편집 슬라이드
    var swiper = new Swiper(".mySwiper", {
        pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
    });

    //영상편집 탭메뉴
    $('.motion_menu ul li').click(function(){
        $('.motion_menu ul li').removeClass('on');
        $(this).addClass('on');/* 작성 순서 중요 요렇게 작성해야함 안그러면 그냥 사라짐 */

        $('.mySwiper').removeClass('on');
        $('.mySwiper').eq($(this).index()).addClass('on');
    });

    $('.gnb a').click(function(e){
        e.preventDefault(); //a링크 방지
    });

/* 메뉴클릭 시 내부페이지 이동 */
    $('.gnb ul li').click(function(){
        var page = $('section').eq($(this).index());
        var pageTop = page.offset().top;

        $('html, body').animate({
            scrollTop : pageTop
        }, 1500, 'easeOutBack');
    });

});//jquery end