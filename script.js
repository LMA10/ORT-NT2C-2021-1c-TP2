console.log("Hola!")

let nombres = ['Adriana', 'Benito', 'Claudia', 'Daniel', 'Estefania', 'Fernando','Gabriela','Hugo']
nombres.forEach(function(nombre) {
    console.log(nombre)
})

const nombres_obj = fooTP2(nombres)

console.log(JSON.stringify(nombres_obj))

function fooTP2(nombres) {

    const respuesta = []

    nombres.forEach(function(e){

        var obj = {
            Nombre: e,
            Longitud: e.length
        }
        respuesta.push(obj)
    })
    return respuesta
}

