

const productos = [
    { id: '1', descripcion: '', categoria: 'ESTRATEGIA', compania: "DEVIR", name: "Los Colonos de Catan", cantidad: 10, price: 3500, foto: "./Imagenes/catan.jpeg" },
    { id: '2', descripcion: '', categoria: 'ESTRATEGIA', compania: "DEVIR", name: "Papua", cantidad: 33, price: 3200, foto: "./Imagenes/papua.jpeg" },
    { id: '3', descripcion: '', categoria: 'ESTRATEGIA', compania: "DEVIR", name: "Stone Age", cantidad: 12, price: 3200, foto: "./Imagenes/stoneage.jpeg" },
    { id: '4', descripcion: '', categoria: 'INFANTIL', compania: "DEVIR", name: "La Isla", cantidad: 5, price: 3200, foto: "./Imagenes/theisland.jpeg" },
    { id: '5', descripcion: '', categoria: 'ESTRATEGIA', compania: "DEVIR", name: "7 Wonders Duel", cantidad: 6, price: 3200, foto: "./Imagenes/twonderduel.jpeg" },
    { id: '6', descripcion: '', categoria: 'ESTRATEGIA', compania: "DEVIR", name: "CarpeDiem", cantidad: 8, price: 3200, foto: "./Imagenes/carpediem.jpeg" },
    { id: '7', descripcion: '', categoria: 'ESTRATEGIA', compania: "MALDON", name: "Century", cantidad: 11, price: 3200, foto: "./Imagenes/century.jpeg" },
    { id: '8', descripcion: '', categoria: 'FAMILIAR', compania: "MALDON", name: "Hospital Dice", cantidad: 2, price: 3200, foto: "./Imagenes/dicehospital.jpeg" },
    { id: '9', descripcion: '', categoria: 'CONOCIMIENTO', compania: "MALDON", name: "El Cinefilo", cantidad: 10, price: 3200, foto: "./Imagenes/cinefilo.jpeg" },
    { id: '10', descripcion: 'El Erudito es un juego de mesa de preguntas en donde no gana el que más sabe sino el que mejor razona. Es ideal para jugar en equipos. Un juego de mesa que combina ingenio, cultura general y apuestas en más de mil consignas. Según el casillero, se apostará un monto y se deberá responder una de las tarjetas. Una de las características más particulares de este juego de mesa es que las preguntas en vez de estar agrupadas de manera clásica por área: espectáculos, deporte, historia, etc. están agrupadas por formato de pregunta: Secuencia, En común, Asociación y Aproximación. ', categoria: 'FAMILIAR', compania: "MALDON", name: "El Erudito", cantidad: 16, price: 3200, foto: "./Imagenes/elerudito.jpeg" },
    { id: '11', descripcion: '', categoria: 'ESTRATEGIA', compania: "MALDON", name: "Viticulture", cantidad: 4, price: 3200, foto: "./Imagenes/viticulture.jpeg" },
    { id: '12', descripcion: '', categoria: 'ESTRATEGIA', compania: "MALDON", name: "Imhotep", cantidad: 4, price: 3200, foto: "./Imagenes/imhontep.jpeg" },
    { id: '13', descripcion: '', categoria: 'CONOCIMIENTO', compania: "MALDON", name: "Atenea", cantidad: 6, price: 3200, foto: "./Imagenes/atenea.jpeg" },
    { id: '14', descripcion: '', categoria: 'FAMILIAR', compania: "MALDON", name: "Love Letters", cantidad: 9, price: 3200, foto: "./Imagenes/loveletters.jpeg" }
]

//setTimeout(()=>{ acciones }, 3000)
export const getProductos = new Promise((resolve, reject) => {

    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    } else {
        reject('400 not found')

    }
})

/* export const getProductosID = new Promise((idProducto, reject) => {

    const unProducto = productos.find(prod => prod.id === idProducto);

    if ({unProducto }) {
        setTimeout(() => {
           return unProducto
        }, 2000)
    } else {
        reject('400 not found')

    }
}) */
const unProducto = [
{ id: '10', descripcion: 'El Erudito es un juego de mesa de preguntas en donde no gana el que más sabe sino el que mejor razona. Es ideal para jugar en equipos. Un juego de mesa que combina ingenio, cultura general y apuestas en más de mil consignas. Según el casillero, se apostará un monto y se deberá responder una de las tarjetas. Una de las características más particulares de este juego de mesa es que las preguntas en vez de estar agrupadas de manera clásica por área: espectáculos, deporte, historia, etc. están agrupadas por formato de pregunta: Secuencia, En común, Asociación y Aproximación. ', categoria: 'FAMILIAR', compania: "MALDON", name: "El Erudito", cantidad: 16, price: 3200, foto: "./Imagenes/elerudito.jpeg" },
]


export const getProductosID = new Promise(( resolve, reject )=>{
let condition=true
if (condition) {
    setTimeout(()=>{ 
        resolve(unProducto)
     }, 3000)
} else {
    reject('400 not found')
    
}
})