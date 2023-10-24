var form = $('#inputForm');

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

var daySoElement = $('input[name="dayso"]');
handleBlurInput(daySoElement);

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
    if (isRequired(daySoElement)) {
        check = false;
    }

    if (check) {
        const formValue = {};
        for (const el of e.target) {
            if (el.name) {
                formValue[el.name] = el.value;
            }
        }
        var daySo = formValue['dayso'];
        var resultElement = document.getElementById('result');
        var arDaySo = daySo.split(",");
        var tong = 0;
        for (var i = 0; i < arDaySo.length; i++) {
            tong += Number(arDaySo[i]);
        }

        resultElement.innerHTML = `
            <p>Tổng của dãy số là: ${tong}</p>
        `;
    }
})