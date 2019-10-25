$(document).ready(function () {
    $(".gallery").each(function () {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        $('.hide').css('display', 'none');
        $('.mfp-bg').css('opacity', '0.95');
    });
});