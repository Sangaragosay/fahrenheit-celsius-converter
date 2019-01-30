function fahrenheitToCelsius(value) {
    return (value - 32) * 5 / 9;
};

function fahrenheitToKalvin(value) {
    return (value - 32) * (5 / 9) + 273.15;;
};

function celsiusToFahrenheit(value) {
    return (value * (9 / 5)) + 32;
};

function celsiusToKalvin(value) {
    return (value * 1) + 273;
};
function KalvinToCelsius(value) {
    return value - 273.15;
};
function KalvinToFahrenheit(value) {
    return (value - 273.15) * 9/5 + 32;
};
  var output = null;
$(document).ready(function() {
    $input = $('input');
    $inputFahrenheit = $('.js-input-fahrenheit');
    $inputCelsius = $('.js-input-celsius');
    $inputKalvin = $('.js-input-Kalvin');
    $errorsDiv = $('.js-errors');

    $input.on('blur', function() {
        var value = $(this).val();
        var type = $(this).attr('data-unit');

        if (value == '') {
            value = 0;
        };

        if ($.isNumeric(value)) {

            if (type == 'fahrenheit') {
                 output = fahrenheitToKalvin(value);
                $('.js-input-celsius').val(output.toFixed(1));
                 output = celsiusToKalvin(value)
                $('.js-input-Kalvin').val(output.toFixed(1));

            } else if (type == 'celsius') {
                 output = celsiusToFahrenheit(value);
                $('.js-input-fahrenheit').val(output.toFixed(1));
                 output = celsiusToKalvin(value)
                $('.js-input-Kalvin').val(output.toFixed(1));

            } else if (type == 'Kalvin') {
                 output =  KalvinToCelsius(value);
                $('.js-input-celsius').val(output.toFixed(1));
                 output = KalvinToFahrenheit(value);
                $('.js-input-fahrenheit').val(output.toFixed(1));
            }

            $errorsDiv.addClass('is-hidden');
            $errorsDiv.html("");

        } else {

            $errorsDiv.removeClass('is-hidden');
            $errorsDiv.html("Sorry, I can only convert numbers");

        };
    });

});
