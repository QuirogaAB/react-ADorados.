const products = [
    {

        id: '1',
        name: 'Pañales dia',
        price: '12000',
        category: 'Cuidado e Higiene',
        img:'',
        stock:'30',
        description:'Descripcion Pañales de dia',
    },

    {
        id: '2',
        name: 'Pañales noche',
        price: '14000',
        category: 'Cuidado e Higiene',
        img:'',
        stock:'30',
        description:'Descripcion Pañales de noche',

    },

    {
        id: '3',
        name: 'Jabon Hipoalergenico',
        price: '3000',
        category: 'Cuidado e Higiene',
        img:'',
        stock:'15',
        description:'Descripcion Jabon Hipoalergenico',
    },

    {  
        id: '4',
        name: 'Kit Uñas',
        price: '3500',
        category: 'Cuidado e Higiene',
        img:'',
        stock:'10',
        description:'Descripcion Kit Uñas',

    },

    {
        id: '5',
        name: 'Neceser',
        price: '2500',
        category: 'Cuidado e Higiene',
        img:'',
        stock:'30',
        description:'Descripcion Neceser',
    },

    {
        id: '6',
        name: 'Pastillero',
        price: '1500',
        category: 'Cuidado e Higiene',
        img:'',
        stock:'40',
        description:'Descripcion Pastillero',
    },

    {
        id: '7',
        name: 'Batido proteico',
        price: '18000',
        category: 'Alimentacion',
        img:'',
        stock:'25',
        description:'Descripcion Batido proteico',
    },

    {
        id: '8',
        name: 'Galletas',
        price: '3000',
        category: 'Alimentacion',
        img:'',
        stock:'30',
        description:'Descripcion Galletas',
    },

    {
        id: '9',
        name: 'Agua alcalina',
        price: '2500',
        category: 'Alimentacion',
        img:'',
        stock:'40',
        description:'Descripcion Agua alcalina',
    },

    {
        id: '10',
        name: 'Muletas',
        price: '7000',
        category: 'Ortopedia',
        img:'',
        stock:'25',
        description:'Descripcion Muletas',
    },

    {
        id: '11',
        name: 'Baston',
        price: '5000',
        category: 'Ortopedia',
        img:'',
        stock:'25',
        description:'Descripcion Baston',
    },

    {
        id: '12',
        name: 'Andadores',
        price: '23000',
        category: 'Ortopedia',
        img:'',
        stock:'25',
        description:'Descripcion Andadores',
    },

    {
        id: '13',
        name: 'Silla de Ruedas',
        price: '46000',
        category: 'Ortopedia',
        img:'',
        stock:'25',
        description:'Descripcion Silla de Ruedas',
    }

]

export const getProducts = () => {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve(products)
        },500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve (products.find(prod => prod.id === productId))
        },500)
    })
}