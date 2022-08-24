export const validateForm = (form) => {
    
    let errors = {}
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let numberVal = /^([0-9])*$/

    if (!form.nombre.trim()) {
        errors.nombre = 'Por favor, complete el campo'
    }
    else if (!regexName.test(form.nombre.trim())) {
        errors.nombre = 'El campo solo admite letras'
    }

    if (!form.apellido.trim()) {
        errors.apellido = 'Por favor, complete el campo'
    }
    else if (!regexName.test(form.apellido.trim())) {
        errors.apellido = 'El campo solo admite letras'
    }

    if (!form.telefono.trim()) {
        errors.telefono = 'Por favor, complete el campo'
    }
    else if (!numberVal.test(form.telefono.trim())) {
        errors.telefono = 'El campo solo admite numeros'
    }

    if (!form.correo.trim()) {
        errors.correo = 'Por favor, complete el campo'
    }
    else if (!regexEmail.test(form.correo.trim())) {
        errors.correo = 'Ingrese un mail valido'
    }

    return errors;
}