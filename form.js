function myForm()  {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(name == '' || email == ''|| password == '') {
        name.classList.add("error");
        email.classList.add("error");
        password.classList.add("error");
    }

}

console.log("a ver si funca")


function changeText(id) {
    id.innerHTML = "FUNCIONÓ";
    id.style.color = "red";
}


let boton = document.getElementById("boton-enviar");

function cambiarBoton() {
    let boton = document.getElementById("boton-enviar");

    boton.classList.add("enviado");
}


