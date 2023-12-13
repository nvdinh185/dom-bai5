var form = $('#inputForm');

form.on("submit", function (e) {
    e.preventDefault();

    const formValue = {};
    for (const el of e.target) {
        if (el.name) {
            formValue[el.name] = el.value;
        }
    }
    var bankinh;
    var dientich;
    var errorElement = $('#error');
    if ((formValue['bankinh'] && formValue['dientich']) || (!formValue['bankinh'] && !formValue['dientich'])) {
        errorElement.html(`<p style="color: red; font-style: italic;">Vui lòng nhập 1 trong 2 giá trị</p>`);
    } else if (formValue['bankinh']) {
        errorElement.html('');
        bankinh = formValue['bankinh'];
        dientich = bankinh * bankinh * 3.14;
        var inputElement = $('input[name="dientich"]');
        inputElement.val(dientich.toFixed(2));
    } else {
        errorElement.html('');
        dientich = formValue['dientich'];
        bankinh = Math.sqrt(dientich / 3.14);
        var inputElement = $('input[name="bankinh"]');
        inputElement.val(bankinh.toFixed(2));
    }
})