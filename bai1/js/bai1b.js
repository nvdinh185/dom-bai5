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
    var arDaySo = daySo.split(",");
    var tong = 0;
    for (var i = 0; i < arDaySo.length; i++) {
        tong += Number(arDaySo[i]);
    }

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = `
        <p>Tổng của dãy số là: ${tong}</p>
    `;
})