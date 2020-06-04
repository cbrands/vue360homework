let cats = [
    {
        id: 1001,
        name: `Snoozy`,
        description: `Snoozy is a quite adorable cat that won't give you any trouble. Just make sure you check your cup before you poor in your hot morning coffe.`,
        image: `cat1`,
        price: 100,
        stars: 4
    },
    {
        id: 1002,
        name: `Boxer`,
        description: `Boxer is a cute cat but he is naughty. Do not leave this one out of your sight.`,
        image: `cat2`,
        price: 125,
        stars: 5
    },
    {
        id: 1003,
        name: `Snowy`,
        description: `Snowy is a very smart cat. Trust us, hide your car keys.`,
        image: `cat3`,
        price: 75,
        stars: 3
    },
    {
        id: 1004,
        name: `Fluffy`,
        description: `Fluffy loves christmas. Especially christmas lights.`,
        image: `cat4`,
        price: 105,
        stars: 4
    },
    {
        id: 1005,
        name: `Tiger`,
        description: `Tiger is a very active cat. Once he got his morning coffee.`,
        image: `cat5`,
        price: 110,
        stars: 3
    },
    {
        id: 1005,
        name: `Cacofonix`,
        description: `Cacofonix loves to sing all day. Please take him. We pay you.`,
        image: `cat5`,
        price: -100,
        stars: 1
    },
];

let getCats = () => {
    return this.cats;
}

let getCat = id => this.cats.filter( cat => cat.id == id )

export { getCats, getCat };