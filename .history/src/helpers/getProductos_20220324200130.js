

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
    { id: '10', descripcion: '', categoria: 'FAMILIAR', compania: "MALDON", name: "El Erudito", cantidad: 16, price: 3200, foto: "./Imagenes/elerudito.jpeg" },
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