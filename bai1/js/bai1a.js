var form = document.forms.inputForm;

var chieuDaiElement = document.querySelector('input[name="chieudai"]');
var chieuRongElement = document.querySelector('input[name="chieurong"]');

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

handleBlurInput(chieuDaiElement);
handleBlurInput(chieuRongElement);

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
    if (isRequired(chieuDaiElement)) {
        check = false;
    }
    if (isRequired(chieuRongElement)) {
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
        var chieuDai = formValue['chieudai'];
        var chieuRong = formValue['chieurong'];

        var resultElement = document.getElementById('result');

        var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
        var dienTich = chieuDai * chieuRong;
        resultElement.innerHTML = `
            <p>Chu vi: ${chuVi}</p>
            <p>Diện tích: ${dienTich}</p>
        `;
    }
})