var form = document.forms.form;

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

var hotenElement = document.querySelector('input[name="hoten"]');
handleBlurInput(hotenElement);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formValue = {};
    for (const el of e.target) {
        if (el.name) {
            formValue[el.name] = el.value;
        }
    }
    var hoten = formValue['hoten'];
    if (hoten) {
        var inputElement = document.querySelector('input[name="hoten"]');
        inputElement.value = hoten;
        var greetingElement = document.getElementById('greeting');
        greetingElement.innerHTML = `Câu chào: <strong>Chào bạn ${hoten}</strong>`;
    }
})