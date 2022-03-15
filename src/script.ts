/// <reference path='../node_modules/@types/jquery/dist/jquery.slim.d.ts'/>
$(() => {
    $('#toggleNavbarRightLeft').on('click', () => {
        if ($('.navbar-left').length) {
            $('.navbar-left').attr('class', 'navbar-right');
            $('.main-right').attr('class', 'main-left');
            $('.material-icons:contains("toggle_on")').text('toggle_off');
        } else {
            $('.navbar-right').attr('class', 'navbar-left');
            $('.main-left').attr('class', 'main-right');
            $('.material-icons:contains("toggle_off")').text('toggle_on');
        }
    })
});