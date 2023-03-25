var form = document.forms.form;

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
    }
    var greetingElement = document.getElementById('greeting');
    greetingElement.innerHTML = `Câu chào: <strong>Chào bạn ${hoten}</strong>`;
})