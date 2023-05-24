var submitElement = document.querySelector('input[type="submit"]');

/**
 * Hàm để xử lý khi blur vào ô input
 * @param {*} input 
 */
function handleBlurInput(input) {
    var errorElement = input.parentElement.querySelector('.form-message');
    input.onblur = function () {
        if (input.value === '') {
            errorElement.setAttribute('style', 'color: red; font-style: italic;');
            errorElement.innerText = 'Vui lòng nhập';
        } else {
            errorElement.innerText = '';
        }
    }
}

var daySoElement = document.querySelector('input[name="dayso"]');
handleBlurInput(daySoElement);

submitElement.onclick = function (e) {
    e.preventDefault();

    var daySo = daySoElement.value;
    var resultElement = document.getElementById('result');
    if (daySo) {
        var arDaySo = daySo.split(",");
        var tong = 0;
        for (var i = 0; i < arDaySo.length; i++) {
            tong += Number(arDaySo[i]);
        }

        resultElement.innerHTML = `
            <p>Tổng của dãy số là: ${tong}</p>
        `;
    } else {
        resultElement.innerHTML = `
        <p style="color: red">Vui lòng nhập dãy số!</p>
    `;
    }
}