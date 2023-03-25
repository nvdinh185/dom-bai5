var form = document.forms.form;

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