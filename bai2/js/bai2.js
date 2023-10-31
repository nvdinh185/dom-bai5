var form = document.forms.form;

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

var hotenElement = document.querySelector('input[name="hoten"]');
handleBlurInput(hotenElement);

form.addEventListener('submit', function (e) {
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
    if (isRequired(hotenElement)) {
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
        var hoten = formValue['hoten'];
        var greetingElement = document.getElementById('greeting');
        greetingElement.innerHTML = `Câu chào: <strong>Chào bạn ${hoten}</strong>`;
    }
})