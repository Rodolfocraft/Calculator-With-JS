const pantalla = document.querySelector("#resultado");
const botones = document.querySelectorAll(".button");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const BotonApretado = boton.textContent.trim();
    
    if (BotonApretado === "C") {
        pantalla.value = "0";
        return;
    }

    if (boton.classList.contains('borrar')) {
        pantalla.value = pantalla.value.slice(0, -1);
        if (pantalla.value === "") {
          pantalla.value = "0";
        }
        return;
    }

    if (boton.id === "igual"){
        try {
            pantalla.value = eval(pantalla.value);
        } catch {
            pantalla.value = "Error";
        }
        return;
    }

    if (pantalla.value === "0") {
      pantalla.value = BotonApretado;
    } else {
      pantalla.value += BotonApretado;
    }
  });
});
