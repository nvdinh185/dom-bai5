var form = $('form');

var chieuDaiElement = $('input[name="chieudai"]');
var chieuRongElement = $('input[name="chieurong"]');

/**
 * Hàm để xử lý khi blur vào ô input
 * @param {*} input
 */
function handleBlurInput(input) {
    var errorElement = input.parent().children()[2];
    input.blur(function () {
        if (input.val().trim() === '') {
            $(errorElement).attr('style', 'color: red; font-style: italic;');
            $(errorElement).text('Vui lòng nhập');
            input.addClass('invalid');
        } else {
            $(errorElement).text('');
            input.removeClass('invalid');
        }
    })

    input.on('input', function () {
        $(errorElement).attr('style', 'display: none;');
        input.removeClass('invalid');
    })
}

handleBlurInput(chieuDaiElement);
handleBlurInput(chieuRongElement);

form.on("submit", function (e) {
    e.preventDefault();

    const formValue = {};
    for (const el of e.target) {
        if (el.name) {
            formValue[el.name] = el.value;
        }
    }
    var chieuDai = Number(formValue['chieudai']);
    var chieuRong = Number(formValue['chieurong']);

    var resultElement = $('#result');
    if (chieuDai && chieuRong) {
        var chuVi = (chieuDai + chieuRong) * 2;
        var dienTich = chieuDai * chieuRong;
        resultElement.html(`
            <p>Chu vi: ${chuVi}</p>
            <p>Diện tích: ${dienTich}</p>
        `);
    } else {
        resultElement.html(`
            <p style="color: red">Vui lòng nhập đầy đủ thông tin vào!</p>
        `);
    }

})