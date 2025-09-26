document.addEventListener('DOMContentLoaded',() => {
    const botonComprar = document.querySelectorAll(".comprar");
    const carro = document.querySelectorAll("carrito");
    const contador = document.querySelectorAll("contador");

    let cantidad = 0;

    botonComprar.forEach(boton => {
        boton.addEventListener("Click", () => {
            cantidad++;
            contador.textContent = cantidad;

        carro.classList.add("mostar");
        });
    });
});