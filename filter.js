let pets = [
    {
        name: 'Spot',
        type: 'Hamster'
    },
    {
        name: 'Harry',
        type: 'Hamster'
    },
    {
        name: 'Kitty',
        type: 'Cat'
    }
];

let hamsters = pets.filter(function (pet) {
return pet.type==="Hamster"

});

console.log(hamsters);
