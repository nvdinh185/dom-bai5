var form = $('#inputForm');

/**
 * Hàm để xử lý khi blur vào ô input
 * @param {*} input 
 */
function handleBlurInput(input) {
    var errorElement = input.next();
    input.on('blur', function () {
        if (input.val().trim() === '') {
            errorElement.attr('style', 'color: red; font-style: italic;');
            errorElement.text('Vui lòng nhập');
            input.addClass('invalid');
        }
    })

    input.on('input', function () {
        errorElement.attr('style', 'display: none;');
        input.removeClass('invalid');
    })
}

var hotenElement = $('input[name="hoten"]');
handleBlurInput(hotenElement);

form.on("submit", function (e) {
    e.preventDefault();

    const formValue = {};
    for (const el of e.target) {
        if (el.name) {
            formValue[el.name] = el.value;
        }
    }
    var hoten = formValue['hoten'];
    if (hoten) {
        var inputElement = $('input[name="hoten"]');
        inputElement.val(hoten);
        var greetingElement = $('#greeting');
        greetingElement.html(`Câu chào: <strong>Chào bạn ${hoten}</strong>`);
    }
})