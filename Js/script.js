$(document).ready(function () {

    $('.input-field').on('focus', function () {
        $(this).closest('.form-group').addClass('focused');
    });

    $('.input-field').on('blur', function () {

        if ($(this).val() === '') {
            $(this).closest('.form-group').removeClass('focused');
        }
    });


    $('.show-hide').click(function () {
        if ($(this).hasClass('show')) {
            $(this).addClass('fa-eye-slash');
            $(this).removeClass('fa-eye');
            $(this).siblings('.pass-input').attr('type', 'text');
            $(this).removeClass('show');
        } else {
            $(this).removeClass('fa-eye-slash');
            $(this).addClass('fa-eye');
            $(this).siblings('.pass-input').attr('type', 'password');
            $(this).addClass('show');
        }

    });

    $('button[type="submit"]').click(function () {
        $('.show-hide').removeClass('fa-eye-slash');
        $('.show-hide').addClass('fa-eye');
        $('.pass-input').attr('type', 'password');
    });

})
