var form = document.forms.form;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formValue = {};
    for (const el of e.target) {
        if (el.name) {
            formValue[el.name] = el.value;
        }
    }
    var bankinh;
    var dientich;
    var errorElement = document.getElementById('error');
    if ((formValue['bankinh'] && formValue['dientich']) || (!formValue['bankinh'] && !formValue['dientich'])) {
        errorElement.innerHTML = `<p style="color: red">Vui lòng nhập 1 trong 2 giá trị</p>`;
    } else if (formValue['bankinh']) {
        errorElement.innerHTML = '';
        bankinh = formValue['bankinh'];
        dientich = bankinh * bankinh * 3.14;
        var inputElement = document.querySelector('input[name="dientich"]');
        inputElement.value = dientich;
    } else {
        errorElement.innerHTML = '';
        dientich = formValue['dientich'];
        bankinh = Math.sqrt(dientich / 3.14);
        var inputElement = document.querySelector('input[name="bankinh"]');
        inputElement.value = bankinh;
    }
})