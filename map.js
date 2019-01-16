let arr = ["dog", "cat", "pig", "hamster"];

let pet_objects = arr.map(function (petType, petNum) {
    let obj4pets= {};

    obj4pets.ndx= petType;
    obj4pets.val= petNum;
return obj4pets;
    
});

console.log(pet_objects);

