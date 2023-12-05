window.onscroll = function showheader(){
    let header = document.querySelector('.header')

    if(window.pageYOffset > 200){
        header.classList.add('header__fixed')
    } else{
        header.classList.remove('header__fixed')
    }
}

var full_img_box = document.getElementById('full_img_box');
var full_img = document.getElementById('full_img');

function openfull_img(pic) {
    full_img_box.style.display = 'flex';
    full_img.src = pic;
}

function closefull_img() {
    full_img_box.style.display = 'none';
}

$(function() {

    /* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
    });

});