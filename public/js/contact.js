/**
 * Created by dave.torrente on 12/16/2016.
 */
$(document).ready(function() {

    $('.headerContact').on('click', function () {
        $('#gform')[0].reset();

        $('#contactModal').addClass('is-active');
        $("#gform").css("display", "block");
        //$('#error-field').css('display', 'none');
        //var validator = $("#login-form").validate();
        //validator.resetForm();
        //$('.homeModal .modal-content .input-box').removeClass('error');
        //$('#error-field.error-field').hide();

        $('.delete').on('click', function () {
            $('#contactModal').removeClass('is-active');
            $('#gform')[0].reset();
            $("#gform").css("display", "block");
        });

    });

    //$('.submitBut').on('click', function () {
    //
    //  $('#thankyou_message').addClass('is-active');
    //   $('#contactModal').removeClass('is-active');
    //    $('.delete').on('click', function () {
    //        $('#thankyou_message').removeClass('is-active');
    //    });
       //$('#error-field').css('display', 'none');
     //  var validator = $("#login-form").validate();
     //  validator.resetForm();
     //  $('.homeModal .modal-content .input-box').removeClass('error');
     //$('#error-field.error-field').hide();  //});

});

//$("form[name='formValid']").validate({
//    // Specify validation rules
//    rules: {
//        // The key name on the left side is the name attribute
//        // of an input field. Validation rules are defined
//        // on the right side
//        firstname: "required",
//
//        email: {
//            required: true,
//            // Specify that email should be validated
//            // by the built-in "email" rule
//            email: true
//        },
//        message: {
//            required: true
//
//        }
//    },
//    // Specify validation error messages
//    messages: {
//        username: "Please enter your firstname",
//
//        message: {
//            required: "Please provide a short message"
//
//        },
//        email: "Please enter a valid email address"
//    },
//    // Make sure the form is submitted to the destination defined
//    // in the "action" attribute of the form when valid
//    submitHandler: function(form) {
//        form.submit();
//    }
//});