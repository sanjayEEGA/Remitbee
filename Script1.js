$(document).ready(function () {
    // executes when HTML-Document is loaded and DOM is ready
    console.log("document is ready");


    $(".card").hover(
        function () {
            $(this).addClass('shadow-lg').css('cursor', 'pointer');
        },
        function () {
            $(this).removeClass('shadow-lg');
        }
    );

    // document ready  
});
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}
$('.dropdown-toggle').dropdown()
$('.my-select').selectpicker();
$('select').selectpicker();
$(function () {
    $('select').selectpicker();
});
//dropdown
$('.dropdown').click(function () {

    $('.dropdown-menu').toggleClass('show');

});
//

    $(document).ready(function() {
        $("#countries").msDropdown();
})
