document.addEventListener('DOMContentLoaded', function(){
    const products = [{id: 1, name: 'Smartphone', description: 'Description of the Smartphone.', image: 'Images/smartphone.jpg'},
                      {id: 2, name: 'Television', description: 'Description of the Television.', image: 'Images/television.jpg'},
                      {id: 3, name: 'Laptop', description: 'Description of the Laptop.', image: 'Images/laptop.jpg'},
                      {id: 4, name: 'AC', description: 'Description of the AC.', image: 'Images/AC.jpg'},
                      {id: 5, name: 'Ipad', description: 'Description of the Ipad.', image: 'Images/ipad.jpg'},
                      {id: 6, name: 'Piano', description: 'Description of the Piano.', image: 'Images/piano.jpg'}
    ]
});

let total = 0;

const cart = [];

//Add to Cart button
