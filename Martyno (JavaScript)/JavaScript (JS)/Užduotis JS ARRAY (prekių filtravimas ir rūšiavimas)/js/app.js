const produktai = [
    { id: 1, pavadinimas: 'Laptop', kategorija: 'Electronics', kaina: 1200 },
    { id: 2, pavadinimas: 'Smartphone', kategorija: 'Electronics', kaina: 800 },
    { id: 3, pavadinimas: 'Shirt', kategorija: 'Clothing', kaina: 40 },
    { id: 4, pavadinimas: 'Jeans', kategorija: 'Clothing', kaina: 60 },
    { id: 5, pavadinimas: 'Coffee Maker', kategorija: 'Appliances', kaina: 150 },
    { id: 6, pavadinimas: 'Blender', kategorija: 'Appliances', kaina: 120 },
    { id: 7, pavadinimas: 'TV', kategorija: 'Electronics', kaina: 600 },
    { id: 8, pavadinimas: 'Socks', kategorija: 'Clothing', kaina: 10 },
    { id: 9, pavadinimas: 'Microwave', kategorija: 'Appliances', kaina: 180 },
    { id: 10, pavadinimas: 'Smart Watch', kategorija: 'Electronics', kaina: 250 }
];

function filterProductsByCategory(produktai, category) {
    return produktai.filter(product => product.kategorija === category);
}

function sortProductsByPriceAsc(kaina) {
    return [...kaina].sort((a, b) => a.kaina - b.kaina);
}

function sortProductsByPriceDsc(kaina) {
    return [...kaina].sort((a, b) => b.kaina - a.kaina);
}


let electronics = filterProductsByCategory(produktai, 'Electronics');
console.log('Elektronika: ', electronics);

let electronicsAsc = sortProductsByPriceAsc(electronics);
console.log("Elektronika rūšiuota nuo mažiausios kainos: ", electronicsAsc);

let electronicsDsc = sortProductsByPriceDsc(electronics);
console.log("Elektronika rūšiuota nuo didžiausiso kainos: ", electronicsDsc);
