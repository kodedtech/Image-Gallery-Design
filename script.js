// MORE ARRAY METHODS => filter, map, find, some, every, reduce, includes

const items = [
    { name: 'Bike', price: 100 },
    { name: 'Tv', price: 200 },
    { name: 'Album', price: 10 },
    { name: 'Book', price: 5 },
    { name: 'Computer', price: 500 },
    { name: 'Phone', price: 1000 },
    { name: 'Keyboard', price: 25 }
];

// filter method

const filteredItems = items.filter((item) => {
    return item.price <= 100
});
Console.log(filteredItems);

// map method

const mappedItems = items.map((item) => {
    return item.price
});

Console.log(mappedItems);