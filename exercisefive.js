console.log("La gaaarra, se mueve. Dice quien se queda y quien se va");

/*
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/
let people = ["María", "Dani", "Luis", "Juan", "Camila"];

// Print out all of the people in the list
console.log(`Los marcianitos son: ${people}`);

// Remove "Dani" from the array
people.splice(people.indexOf("Dani"), 1);
console.log(`Dani ha sido elegido. Quedan: ${people}`);

// Remove "Juan" from the array
people.splice(people.indexOf("Juan"), 1);
console.log(`Juan ha sido elegido. Quedan: ${people}`);

// Move "Luis" to the front of the array
people.unshift(people.splice(people.indexOf("Luis"), 1)[0]);
console.log(`¡María se ha oculto detrás de Luis! Quedan: ${people}`);
// Add your name to the end of the array
people.push("Mariana");
console.log(`¡Un duende salvaje ha aparecido! Quedan: ${people}`);
// Using a loop, iterate through this array and after console.log "Maria", exit from the loop
for (let person of people) {
    console.log(person);
    if (person === "María") {
        break;
    }
}

// Write the command that gives the indexOf where "Maria" is located
let indexOfMaria = people.indexOf("María");
console.log(`María se encuentra en: ${indexOfMaria}`);

console.log(`Los sobrevivientes son: ${people}`);