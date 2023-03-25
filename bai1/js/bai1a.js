var form = document.forms.form;

var chieuDaiElement = document.querySelector('input[name="chieudai"]');
var chieuRongElement = document.querySelector('input[name="chieurong"]');

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

handleBlurInput(chieuDaiElement);
handleBlurInput(chieuRongElement);

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formValue = {};
    for (const el of e.target) {
        if (el.name) {
            formValue[el.name] = el.value;
        }
    }
    var chieuDai = Number(formValue['chieudai']);
    var chieuRong = Number(formValue['chieurong']);

    var resultElement = document.getElementById('result');
    if (chieuDai && chieuRong) {
        var chuVi = (chieuDai + chieuRong) * 2;
        var dienTich = chieuDai * chieuRong;
        resultElement.innerHTML = `
            <p>Chu vi: ${chuVi}</p>
            <p>Diện tích: ${dienTich}</p>
        `;
    } else {
        resultElement.innerHTML = `
            <p style="color: red">Vui lòng nhập đầy đủ thông tin vào!</p>
        `;
    }

})