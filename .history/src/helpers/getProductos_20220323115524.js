

const productos = [
    { id: '1', categoria: 'estrategia', compania: "DEVIR", name: "Los Colonos de Catan", cantidad: 10, price: 3500, foto: "./Imagenes/catan.jpeg"},
    { id: '2', categoria: 'estrategia', compania: "DEVIR", name: "Papua", cantidad: 10, price: 3200, foto: "./Imagenes/papua.jpeg" },
    { id: '3', categoria: 'estrategia', compania: "DEVIR", name: "Stone Age", cantidad: 10, price: 3200, foto: "./Imagenes/stoneage.jpeg" },
    { id: '4', categoria: 'estrategia', compania: "DEVIR", name: "La Isla", cantidad: 10, price: 3200, foto:"./Imagenes/laisla.jpeg" },
    { id: '5', categoria: 'estrategia', compania: "DEVIR", name: "7 Wonders Duel", cantidad: 10, price: 3200, foto: "./Imagenes/twonderduel.jpeg"},
    { id: '6', categoria: 'estrategia', compania: "DEVIR", name: "CarpeDiem", cantidad: 10, price: 3200, foto: "./Imagenes/carpediem.jpeg"},
    { id: '7', categoria: 'estrategia', compania: "MALDON", name: "Century", cantidad: 10, price: 3200, foto: "./Imagenes/century.jpeg" },
    { id: '8', categoria: 'familiar', compania: "MALDON", name: "Hospital Dice", cantidad: 10, price: 3200, foto: "./Imagenes/dicehospital.jpeg" },
    { id: '9', categoria: 'conocimiento', compania: "MALDON", name: "El Cinefilo", cantidad: 10, price: 3200, foto:  "./Imagenes/cinefilo.jpeg"},
    { id: '10', categoria: 'familiar', compania: "MALDON", name: "El Erudito", cantidad: 10, price: 3200, foto:"./Imagenes/elerudito.jpeg" },
    { id: '11', categoria: 'estrategia', compania: "MALDON", name: "Viticulture", cantidad: 10, price: 3200, foto: "./Imagenes/viticulture.jpeg" },
    { id: '12', categoria: 'estrategia', compania: "MALDON", name: "Imhnotep", cantidad: 10, price: 3200, foto: "./Imagenes/imhontep.jpeg" },
    { id: '13', categoria: 'conocimiento', compania: "MALDON", name: "Atenea", cantidad: 10, price: 3200, foto: "./Imagenes/atenea.jpeg" },
    { id: '14', categoria: 'familiar', compania: "MALDON", name: "Love Letters", cantidad: 10, price: 3200, foto: "./Imagenes/loveletters.jpeg"}
]

//setTimeout(()=>{ acciones }, 3000)
export const getProductos = new Promise((resolve, reject) => {

    let condition = true
    if (condition) {
        setTimeout(() => {
            resolve(productos)
        }, 3000)
    } else {
        reject('400 not found')

    }
})