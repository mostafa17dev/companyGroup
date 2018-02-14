$(document).ready(function(){
    // toggle nav bar for small screens
    $('.nav-icon').on('click', function(){
        $('header nav ul').toggleClass('open');
    });
    $('#countriesTab').tabCollapse({
        tabsClass: 'hidden-tabs hidden-sm hidden-xs',
        accordionClass: 'visible-tabs visible-sm visible-xs'
    });
});