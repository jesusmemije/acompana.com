$(function() {
    
    $('.selector').animatedHeadline({
        animationType: 'rotate-3'
    });

    $("#hover-sector-privado").hover(function() {
        $('#img-sector-privado').css("display", "block");
    }, function() {
        $('#img-sector-privado').css("display", "none");
    });

    $("#hover-sector-publico").hover(function() {
        $('#img-sector-publico').css("display", "block");
    }, function() {
        $('#img-sector-publico').css("display", "none");
    });

})