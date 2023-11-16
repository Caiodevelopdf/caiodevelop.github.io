function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
    } else {
        menuMobile.classList.add('open')
    }
}

$('.owl-carousel').owlCarousel({
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
        650:{
            loop:false,
            stagePadding:50,
        },
        1000:{
            items:3,
            loop:false,
            nav:false,
            stagePadding:200,
        }
    }
})