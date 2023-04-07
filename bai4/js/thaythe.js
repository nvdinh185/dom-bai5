var form = document.forms.form;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const formValue = {};
    for (const el of e.target) {
        if (el.name) {
            formValue[el.name] = el.value;
        }
    }
    var chuoigoc = formValue['chuoigoc'];
    var tugoc = formValue['tugoc'];
    var tuthaythe = formValue['tuthaythe'];
    var errorElement = document.getElementById('error');
    if (!chuoigoc || !tugoc || !tuthaythe) {
        errorElement.innerHTML = `<p style="color: red; font-style: italic;">Vui lòng nhập đầy đủ thông tin vào!</p>`;
    } else {
        errorElement.innerHTML = '';
        var chuoithaythe = chuoigoc.replace(tugoc, tuthaythe);
        var doanthaytheElement = document.querySelector('#doanthaythe');
        doanthaytheElement.value = chuoithaythe;
    }
})