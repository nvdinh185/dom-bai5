var form = document.forms.inputForm;

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

    errorElement.innerHTML = '';
    var chuoithaythe = chuoigoc.replace(tugoc, tuthaythe);
    var doanthaytheElement = document.querySelector('#doanthaythe');
    doanthaytheElement.value = chuoithaythe;
})