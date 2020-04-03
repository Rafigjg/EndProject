$(document).ready(function () {
    
    $('.product-image').hover(function () {
        console.log("salam");
        $('.quick-view-btn').toggleClass('d-block');
    })
});