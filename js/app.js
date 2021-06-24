$(function() {
    
    /* Animation Headline */
    $('.selector').animatedHeadline({
        animationType: 'rotate-3'
    });

    /* Hover */
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

    /* Formulario de contacto */
    $("#contactForm").submit(function(event){
        event.preventDefault();
        var post_url = $(this).attr("action");
        var request_method = $(this).attr("method");
        var form_data = $(this).serialize();

        $("#nameHelp").html('');
        $("#emailHelp").html('');
        $("#phoneHelp").html('');
        $("#resultSubmit").html('');
        
        if ($("#name").val() == '') {
            $("#nameHelp").html('Su nombre es requerido');
            return false;
        }
        if ($("#email").val() == '') {
            $("#emailHelp").html('Su correo es requerido');
            return false;
        }
        if ($("#phone").val() == '') {
            $("#phoneHelp").html('Su teléfono es requerido');
            return false;
        }

        $("#resultSubmit").html('Enviando datos...');

        $.ajax({
            url : post_url,
            type: request_method,
            data : form_data
        }).done(function(response){
            $("#resultSubmit").html(response);
        });
    });

})

/* WhatsApp */
const $whatsappme = $(".whatsappme");
const $whatsappme_tooltip = $(".whatsappme_tooltip");

$(window).on("load resize", function() {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $whatsappme.hover(
            function() {
                const $this = $(this);
                $this.find($whatsappme_tooltip).css("display", "block");
            },
            function() {
                const $this = $(this);
                $this.find($whatsappme_tooltip).css("display", "none");
            }
            );
    } else {
        $whatsappme.off("mouseenter mouseleave");
    }
});