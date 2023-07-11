var submitElement = $('input[type="submit"]');

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

submitElement.click(function (e) {
    e.preventDefault();

    var resultElement = $('#result');
    if (chieuDaiElement.val() !== '' && chieuRongElement.val() !== '') {
        var chuVi = (Number(chieuDaiElement.val()) + Number(chieuRongElement.val())) * 2;
        var dienTich = chieuDaiElement.val() * chieuRongElement.val();
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