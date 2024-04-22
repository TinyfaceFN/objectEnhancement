const createInstructor = (firstName, lastName) => { return { firstName, lastName } }

let favoriteNumber = 42;

let instructor = {
    firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

let instructor2 = {
    firstName: 'colt',
    sayHi: function () { return 'Hi!' },
    sayBye: function () { return this.firstName + 'says bye!' }
}

const createAnimal = (spec, verb, noise) => {
    let newObj = { spec, verb, noise }
    return newObj
}
