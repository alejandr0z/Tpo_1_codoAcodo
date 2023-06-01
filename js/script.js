function calcularTotal(cantidadTickets, categoriaDescuento) {
    const estudiante = 0.8
    const trainee = 0.5
    const junior = 0.85
    const precioTicket = 200

    if (categoriaDescuento == "estudiante") {
        resultadoDescuento = cantidadTickets * estudiante * precioTicket
    } 
    else if(categoriaDescuento == "trainee"){
        resultadoDescuento = cantidadTickets * trainee * precioTicket
    }
    else {
        resultadoDescuento = cantidadTickets * junior * precioTicket
    }

    return resultadoDescuento
}

let formulario = document.getElementById("form_calculador")

let divResultado = document.getElementById("resultado")

let cantidad = document.getElementById("cantidad")

let categoria = document.getElementById("categoria")

formulario.addEventListener("submit",(evento) => {
    evento.preventDefault() //quitamos el comportamiento por defecto de recargar la pagina

    divResultado.textContent = "Total a pagar: $" + calcularTotal(cantidad.value , categoria.value)
})

formulario.addEventListener("reset", ()=> {
    divResultado.textContent = "Total a pagar: $0"
})