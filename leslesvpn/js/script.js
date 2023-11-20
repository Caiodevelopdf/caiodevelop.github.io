function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
    } else {
        menuMobile.classList.add('open')
    }
}

$(document).ready(function(){
    var settings1 = {
        stagePadding:50,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
                stagePadding:100,
            },
            500:{
                stagePadding:2,
                loop:false,
            },
            600:{
                items:3,
                loop:false,
                stagePadding:100,
            },
            943:{
                items:3,
                loop:false,
                stagePadding:200,
            },
            
            1157:{
                items:3,
                loop:false,
                nav:false,
                stagePadding:50,
            }

        }

    };
    var  settings2 = {
        stagePadding:50,
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1,
                stagePadding:50,
            },
            500:{
                stagePadding:2,
                loop:false,
            },
            650:{
                loop:true,
                stagePadding:0,
            },
            1375:{
                items:3,
                loop:false,
                nav:false,
                stagePadding:50,
            }
        }
    };
    $('#carousel1').owlCarousel(settings1);
    $('#carousel2').owlCarousel(settings2);
});