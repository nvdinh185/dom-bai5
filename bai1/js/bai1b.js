var form = document.forms.form;

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formValue = {};
    for (const el of e.target) {
        if (el.name) {
            formValue[el.name] = el.value;
        }
    }
    var daySo = formValue['dayso'];
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
})