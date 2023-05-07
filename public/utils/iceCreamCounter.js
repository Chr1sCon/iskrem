function incrementIceCream(person) {
    person.iceCreamCount++;
    person.timestamps.push(new Date().toISOString());
}

function decrementIceCream(person) {
    if (person.iceCreamCount > 0) {
        person.iceCreamCount--;
        person.timestamps.pop();
    }
}

function addPerson(name, iceCreamData) {
    iceCreamData.push({
        name,
        iceCreamCount: 0,
        timestamps: [],
    });
}

function removePerson(index, iceCreamData) {
    iceCreamData.splice(index, 1);
}

export { incrementIceCream, decrementIceCream, addPerson, removePerson };
