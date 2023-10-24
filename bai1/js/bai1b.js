var form = document.forms.inputForm;

/**
 * Hàm để xử lý khi blur hoặc nhập vào ô input
 * @param {*} input 
 */
function handleBlurInput(input) {
    var errorElement = input.parentElement.querySelector('.form-message');
    input.onblur = function () {
        if (input.value.trim() === '') {
            errorElement.setAttribute('style', 'display: block; color: red; font-style: italic;');
            errorElement.innerText = 'Yêu cầu nhập!';
            input.classList.add('invalid');
        }
    }

    input.oninput = function () {
        errorElement.setAttribute('style', 'display: none;');
        input.classList.remove('invalid');
    }
}

var daySoElement = document.querySelector('input[name="dayso"]');
handleBlurInput(daySoElement);

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    function isRequired(input) {
        var errorElement = input.parentElement.querySelector('.form-message');
        if (input.value.trim() === '') {
            errorElement.setAttribute('style', 'display: block; color: red; font-style: italic;');
            errorElement.innerText = 'Yêu cầu nhập!';
            input.classList.add('invalid');
            return true;
        }
    }
    var check = true;
    if (isRequired(daySoElement)) {
        check = false;
    }

    if (check) {

        // Lấy giá trị nhập vào từ các ô input
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