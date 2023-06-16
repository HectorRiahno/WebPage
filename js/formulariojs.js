function validarFormulario() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const emailInvalido = document.querySelector(".email-invalido");
    const contraCorta = document.querySelector(".contra-corta");
    const simbolos = document.querySelector(".simbolos");

    const validado = document.querySelector("validado");
    
    var validar=false;
    const sim = /[$&+,:;=?@#|'<>.^*()%!-]/;
    
    // Validar correo electrónico
    const val_email=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;;
    if (!val_email.test(emailInput.value)) {
        emailInvalido.innerText = ("Ingrese un correo electrónico válido.");
        validar=true;
        return;
    }else{
        emailInvalido.innerText = ("");
    }

    if ((passwordInput.value.length < 6) || (!sim.test(passwordInput.value))) {
        contraCorta.innerText = ("La contraseña debe tener al menos 6 caracteres y mas de un simbolo");
        validar=true;
        return;
    }else{
        contraCorta.innerText = ("");
    }
    
    if(validar==false){
        validado.innerText = ("Formulario enviado correctamente.");
        emailInvalido.innerText = ("");
        contraCorta.innerText = ("");
    }else{
        espacioinfo.innerText="enviando con exito";
        espacioinfo.style.color="green";
    }

    
    // if (!sim.test(passwordInput.value)) {
    //     simbolos.innerText = ("La contraseña debe contener al menos un símbolo.");
    //     return;
    // }
    // validado.innerText = ("Formulario enviado correctamente.");
}
