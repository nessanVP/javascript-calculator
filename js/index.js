$(document).ready(function () {

    // shows string of input on screen (for numbers)
    $('.num').click(function () {
        var btnVal = $(this).text();
        var scrnVal = $('.screen').text();

        if (Number(scrnVal) === 0) {
            $('.screen').empty();
            $('.screen').text(btnVal);
        } else {
            $('.screen').text(scrnVal + btnVal);
        }
    });

    // shows string of input on screen (for operators)
    $('.symbol').click(function () {
        var btnVal = $(this).text();
        var scrnVal = $('.screen').text();
        var arr = scrnVal.split(' ');
        var prev = arr[arr.length - 1];
        if (Number(scrnVal) !== 0 && typeof Number(prev) != "sym") {
            $('.screen').text(scrnVal + ' ' + btnVal + ' ');
        }
    });

    $('.total').click(function () {
        var scrnVal = $('.screen').text();
        var array = scrnVal.split(' ');

        // eliminates any leftover symbols
        if (isNaN(array[array.length - 1])) {
            array.pop();
        }

        sumTotal(array);
    })

    // resets screen to 0
    $('.clear').click(function () {
        $('.screen').text('0');
    });

});

function sumTotal(arr) {
    var sum = parseInt(arr[0]);

    // calculates entire row of input
    while (!isNaN(arr[2])) {
        switch (arr[1]) {
            case "+":
                add();
                break;
            case '-':
                subtract();
                break;
            case '×':
                multiply();
                break;
            case '÷':
                divide();
                break;
        }
    }

    // functions needed for each case
    function add() {
        sum += parseInt(arr[2]);
        arr = arr.splice(3);
        arr.unshift(sum);
    }
    function subtract() {
        sum -= parseInt(arr[2]);
        arr = arr.splice(3);
        arr.unshift(sum);
    }
    function multiply() {
        sum *= parseInt(arr[2]);
        arr = arr.splice(3);
        arr.unshift(sum);
    }
    function divide() {
        sum /= parseInt(arr[2]);
        arr = arr.splice(3);
        arr.unshift(sum);
    }

    $('.screen').text(sum);
}