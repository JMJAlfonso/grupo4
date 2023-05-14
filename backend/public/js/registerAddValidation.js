window.onload = function () {

    const form = document.querySelector('.register-form');
    form.name.focus();

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const allErrorLabels = document.querySelectorAll('.show-error-message');
        allErrorLabels.forEach(element =>{
            element.classList.remove('show-error-message');
            element.innerHTML = '';
        })
        const errors = [];

        if (!form.name.value) {
            errors.push({ name: 'name', message: 'El campo nombre no puede estar vacio' });
            form.name.classList.add('is-invalid');
        }
        if (form.name.value.length < 2 || form.name.value === '') {           
            errors.push({ name: 'name', message: 'El campo nombre debe tener al menos 2 caracteres' });
            form.name.classList.add('is-invalid');
        }
        if (!form.surname.value) {
            errors.push({ name: 'surname', message: 'El campo apellido no puede estar vacio' });
            form.surname.classList.add('is-invalid');
        }
        if (form.surname.value.length < 2 || form.name.value === '') {           
            errors.push({ name: 'surname', message: 'El campo apellido debe tener al menos 2 caracteres' });
            form.surname.classList.add('is-invalid');
        }
        if (!form.email.value) {
            errors.push({ name: 'email', message: 'El campo email no puede estar vacio' });
            form.email.classList.add('is-invalid');
        }
        if (!form.email.value.includes('@')) {
            errors.push({ name: 'email', message: 'Tiene que ingresar un email' });
            form.email.classList.add('is-invalid');
        }
        if (!form.tel.value) {
            errors.push({ name: 'tel', message: 'El campo telefono no puede estar vacio' });
            form.tel.classList.add('is-invalid');
        }
        if (form.tel.value.length < 10 || form.name.value === '') {           
            errors.push({ name: 'tel', message: 'El campo telefono debe ser  al menos 2 caracteres' });
            form.tel.classList.add('is-invalid');
        }

        const path = form.image.value;

        const allowedExtensions = ['JPG', 'jpg', 'png', 'gif', 'jpeg'];

        const splitName = path.split('.');
        const extention = splitName[splitName.length - 1];
        if(!path){
            errors.push({ name: 'userAvatar', message: 'Debe cargar un avatar con un formato de imagen .jpg , .jpeg, .png , .gif ' });
            form.userAvatar.classList.add('is-invalid');
        }
        if (!allowedExtensions.includes(extention)) {
            errors.push({ name: 'userAvatar', message: 'El formato de imagen debe ser .jpg , .jpeg, .png , .gif ' });
            form.userAvatar.classList.add('is-invalid');
        }

        if (!form.password.value) {
            errors.push({ name: 'password', message: 'El campo contraseña no puede estar vacio' });
            form.password.classList.add('is-invalid');
        }
        if (form.password.value.length <8) {
            errors.push({ name: 'password', message: 'Por seguridad la contraseña no puede ser menos a 8 caracteres' });
            form.password.classList.add('is-invalid');
        }

        if (form.password.value && (form.password.value != form.repeat_password.value) ) {
            errors.push({ name: 'repeat_password', message: 'Las contraseñas deben coincidir' });
            form.password.classList.add('is-invalid');
        }
        errors.forEach(error => {
            const errorLabel = document.getElementById(`error-${error.name}`)
            errorLabel.classList.add('show-error-message');
            errorLabel.innerText = error.message;
        })
        if (errors.length === 0) {
            form.submit();
        }
    });
}
