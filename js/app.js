$(function () {

    /* Animation Headline */
    $('.selector').animatedHeadline({
        animationType: 'rotate-3'
    });

    /* Hover */
    $("#hover-sector-privado").hover(function () {
        $('#img-sector-privado').css("display", "block");
    }, function () {
        $('#img-sector-privado').css("display", "none");
    });

    $("#hover-sector-publico").hover(function () {
        $('#img-sector-publico').css("display", "block");
    }, function () {
        $('#img-sector-publico').css("display", "none");
    });

    /* Hover services */
    $(".imgAsistenteVirtual").hover(function () {
        $('#bgAsistenteVirtual').css("background", "#A1195B");
        $('#contentAsistenteVirtual').css("display", "block");
    }, function () {
        $('#bgAsistenteVirtual').css("background", "linear-gradient(45deg, rgba(80,80,80,1) 5%, rgba(1,1,1,1) 50%, rgba(80,80,80,1) 95%)");
        $('#contentAsistenteVirtual').css("display", "none");
    });

    $(".imgAnalisisYAsesoria").hover(function () {
        $('#bgAnalisisYAsesoria').css("background", "#A1195B");
        $('#contentAnalisisYAsesoria').css("display", "block");
    }, function () {
        $('#bgAnalisisYAsesoria').css("background", "linear-gradient(45deg, rgba(80,80,80,1) 5%, rgba(1,1,1,1) 50%, rgba(80,80,80,1) 95%)");
        $('#contentAnalisisYAsesoria').css("display", "none");
    });

    $(".imgCabildeo").hover(function () {
        $('#bgCabildeo').css("background", "#A1195B");
        $('#contentCabildeo').css("display", "block");
    }, function () {
        $('#bgCabildeo').css("background", "linear-gradient(45deg, rgba(80,80,80,1) 5%, rgba(1,1,1,1) 50%, rgba(80,80,80,1) 95%)");
        $('#contentCabildeo').css("display", "none");
    });

    $(".imgVinculacion").hover(function () {
        $('#bgVinculacion').css("background", "#A1195B");
        $('#contentVinculacion').css("display", "block");
    }, function () {
        $('#bgVinculacion').css("background", "linear-gradient(45deg, rgba(80,80,80,1) 5%, rgba(1,1,1,1) 50%, rgba(80,80,80,1) 95%)");
        $('#contentVinculacion').css("display", "none");
    });

    $(".imgNegociacion").hover(function () {
        $('#bgNegociacion').css("background", "#A1195B");
        $('#contentNegociacion').css("display", "block");
    }, function () {
        $('#bgNegociacion').css("background", "linear-gradient(45deg, rgba(80,80,80,1) 5%, rgba(1,1,1,1) 50%, rgba(80,80,80,1) 95%)");
        $('#contentNegociacion').css("display", "none");
    });

    $(".imgCumplimientoRegulatorio").hover(function () {
        $('#bgCumplimientoRegulatorio').css("background", "#A1195B");
        $('#contentCumplimientoRegulatorio').css("display", "block");
    }, function () {
        $('#bgCumplimientoRegulatorio').css("background", "linear-gradient(45deg, rgba(80,80,80,1) 5%, rgba(1,1,1,1) 50%, rgba(80,80,80,1) 95%)");
        $('#contentCumplimientoRegulatorio').css("display", "none");
    });

    
    /* Formulario de contacto */
    $("#contactForm").submit(function (event) {
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
            url: post_url,
            type: request_method,
            data: form_data
        }).done(function (response) {
            $("#resultSubmit").html(response);
            $("#contactForm")[0].reset();
        });
    });

    /* NavBar Top*/
    $('.navbarmenu').removeClass("fixed-top");
    $(document).ready(function () {
        $(window).scroll(function () {
            $('.navbarmenu').toggleClass("fixed-top", ($(window).scrollTop() > 45));
        });
    });

})

/* WhatsApp */
const $whatsappme = $(".whatsappme");
const $whatsappme_tooltip = $(".whatsappme_tooltip");

$(window).on("load resize", function () {
    if (this.matchMedia("(min-width: 768px)").matches) {
        $whatsappme.hover(
            function () {
                const $this = $(this);
                $this.find($whatsappme_tooltip).css("display", "block");
            },
            function () {
                const $this = $(this);
                $this.find($whatsappme_tooltip).css("display", "none");
            }
        );
    } else {
        $whatsappme.off("mouseenter mouseleave");
    }
});