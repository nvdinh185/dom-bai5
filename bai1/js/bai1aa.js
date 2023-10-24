var submitElement = document.querySelector('input[type="submit"]');

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
            errorElement.setAttribute('style', 'color: red; font-style: italic;');
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

submitElement.onclick = function (e) {
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
        var resultElement = document.getElementById('result');
        var chuVi = (Number(chieuDaiElement.value) + Number(chieuRongElement.value)) * 2;
        var dienTich = chieuDaiElement.value * chieuRongElement.value;
        resultElement.innerHTML = `
            <p>Chu vi: ${chuVi}</p>
            <p>Diện tích: ${dienTich}</p>
        `;
    }
}