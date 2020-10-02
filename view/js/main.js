$(document).ready(function() {
    activeMenu();
    banner();
    Scroll();
    navMoile();
    change();
    $('.title-item').click(function() {
        activeTab($(this));
    });
    activeTab($('.title-item:first-child'));
    $('.slider-tab').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2500,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4
            }
        }
    })
    $('.slider-product-similar').owlCarousel({
        loop: true,
        margin: 18,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 3,
            },
            1000: {
                items: 5
            }
        }
    })
})

var slider = document.getElementById("range");
var output = document.querySelector('.price-max');
slider.oninput = function() {
   output.innerHTML = this.value;
}

function activeMenu() {
    $('.list-link').click(function() {
        if ($(this).hasClass('active-menu') != true) {
            $('.list-link').removeClass('active-menu');
            $(this).addClass('active-menu');
        }
    })
}

function banner() {
    $('#next-banner').click(function() {
        let nextBanner = $('.active-slider').next();
        if (nextBanner.length != 0) {
            $('.active-slider').addClass('next-left').one('webkitAnimationEnd', function() {
                $('.next-left').removeClass('next-left').removeClass('active-slider');
            });
            nextBanner.addClass('active-slider').addClass('next-right').one('webkitAnimationEnd', function() {
                $('.next-right').removeClass('next-right');
            });
        } else {
            $('.active-slider').addClass('next-left').one('webkitAnimationEnd', function() {
                $('.next-left').removeClass('next-left').removeClass('active-slider');
            });
            $('.slider:first-child').addClass('active-slider').addClass('next-right').one('webkitAnimationEnd', function() {
                $('.next-right').removeClass('next-right');
            });
        }
    });

    $('#prev-banner').click(function() {
        let prevBanner = $('.active-slider').prev();
        if (prevBanner.length != 0) {
            $('.active-slider').addClass('prev-right').one('webkitAnimationEnd', function() {
                $('.prev-right').removeClass('prev-right').removeClass('active-slider');
            });
            prevBanner.addClass('active-slider').addClass('prev-left').one('webkitAnimationEnd', function() {
                $('.prev-left').removeClass('prev-left');
            });
        } else {
            $('.active-slider').addClass('prev-right').one('webkitAnimationEnd', function() {
                $('.prev-right').removeClass('prev-right').removeClass('active-slider');
            });
            $('.slider:last-child').addClass('active-slider').addClass('prev-left').one('webkitAnimationEnd', function() {
                $('.prev-left').removeClass('prev-left');
            });
        }
    });
}

function Scroll() {
    $(window).scroll(function() {
        let pos_page = $('body,html').scrollTop();
        let headerDowwn = $('#header');
        let Btt = $('#back-to-top');
        if (pos_page > 400) {
            headerDowwn.addClass('top-drog').css({ 'position': 'sticky', 'top': '0', 'z-index': '10' });
        } else if (pos_page == 0) {
            headerDowwn.removeClass('top-drog').css({ 'position': 'unset', 'top': 'unset', 'z-index': 'unset' });
        }

        if (pos_page > 700) {
            Btt.css('display', 'inherit').addClass('aniBtt');
        } else {
            Btt.css('display', 'none').removeClass('aniBtt');
        }
    });
    $('#back-to-top').click(function() {
        $('html,body').animate({ scrollTop: 0 },
            500
        );
    })
}

function navMoile() {
    $('#icon-nav').click(function() {
        $('.navMobile-wrap').css('display', 'inherit');
        $('.navMobile__content').addClass('navMobile');
    });
    $('.navMobile__overlay').click(function() {
        $('.navMobile-wrap').css('display', 'none');
        $('.navMobile__content').removeClass('navMobile');  
    })
}

function activeTab(obj) {
    $('.title-item').removeClass('active-tab');
    $(obj).addClass('active-tab');
    let id = $(obj).find('a').attr('data-tab');
    $('.panels-item').hide();
    $(id).show();
}

function change(){
    let Nconut = parseInt($('.test').val());
    let giam = $('.btn-reduction');
    let tang = $('.btn-increase');
    tang.click(function(){
        $('.test').val(++Nconut);
    }) 
    giam.click(function(){
        $('.test').val(--Nconut);
        if(Nconut<1){
            $('.test').val('1');
            Nconut = 1;
        }
    }) 
}
