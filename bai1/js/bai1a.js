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

    var resultElement = $('#result');
    var check = true;
    if (!formValue['chieudai']) {
        isRequired(chieuDaiElement);
        check = false;
    }
    if (!formValue['chieurong']) {
        isRequired(chieuRongElement);
        check = false;
    }
    if (check) {
        var chieuDai = Number(formValue['chieudai']);
        var chieuRong = Number(formValue['chieurong']);
        var chuVi = (chieuDai + chieuRong) * 2;
        var dienTich = chieuDai * chieuRong;
        resultElement.html(`
            <p>Chu vi: ${chuVi}</p>
            <p>Diện tích: ${dienTich}</p>
        `);
    }

    function isRequired(input) {
        var errorElement = input.parent().children()[2];
        if (input.val().trim() === '') {
            Object.assign(errorElement.style, {
                color: 'red',
                fontStyle: 'italic'
            })
            $(errorElement).text('Yêu cầu nhập!');
            input.addClass('invalid');
        }
    }

})