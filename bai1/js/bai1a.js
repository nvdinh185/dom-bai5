var form = $('#inputForm');

var chieuDaiElement = $('input[name="chieudai"]');
var chieuRongElement = $('input[name="chieurong"]');

/**
 * Hàm để xử lý khi blur hoặc nhập vào ô input
 * @param {*} input
 */
function handleBlurInput(input) {
    var errorElement = input.parent().children()[2];
    input.blur(function () {
        if (input.val().trim() === '') {
            $(errorElement).attr('style', 'display: block; color: red; font-style: italic;');
            $(errorElement).text('Yêu cầu nhập!');
            input.addClass('invalid');
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

    function isRequired(input) {
        var errorElement = input.parent().children()[2];
        if (input.val().trim() === '') {
            $(errorElement).attr('style', 'display: block; color: red; font-style: italic;');
            $(errorElement).text('Yêu cầu nhập!');
            input.addClass('invalid');
            return true;
        }
    }

    var check = true;
    if (isRequired(chieuDaiElement)) {
        check = false;
    }
    if (isRequired(chieuRongElement)) {
        check = false;
    }

    if (check) {
        const formValue = {};
        for (const el of e.target) {
            if (el.name) {
                formValue[el.name] = el.value;
            }
        }

        var resultElement = $('#result');
        var chieuDai = formValue['chieudai'];
        var chieuRong = formValue['chieurong'];
        var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
        var dienTich = chieuDai * chieuRong;
        resultElement.html(`
            <p>Chu vi: ${chuVi}</p>
            <p>Diện tích: ${dienTich}</p>
        `);
    }
})