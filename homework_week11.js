

let hobbies = ["reading", "hiking", "cooking", "gaming", "painting"];

for (let i = 0; i < hobbies.length; i++) {
  console.log("One of my hobbies is " + hobbies[i]);
}

hobbies.push("photography");
hobbies.pop(); 

console.log("Final number of hobbies: " + hobbies.length);

let loveHobbies = hobbies.map(function (hobby) {
  return "I love " + hobby;
});
console.log(loveHobbies);


let temperatures = [18, 27, 30, 9, 22, 11, 26];
let hotDaysCount = 0;

for (let i = 0; i < temperatures.length; i++) {
  console.log("Temperature: " + temperatures[i]);
  if (temperatures[i] > 25) {
    console.log("It's hot!");
    hotDaysCount++;
  } else if (temperatures[i] < 10) {
    console.log("It's cold!");
  }
}

console.log("Number of hot days: " + hotDaysCount);

let hotDays = temperatures.filter(function (temp) {
  return temp > 25;
});
console.log("Hot days: " + hotDays);


let fruits = ["apple", "orange", "banana", "grape", "kiwi"];

if (fruits.includes("banana")) {
  console.log("Banana is in the list!");
} else {
  console.log("No banana found.");
}

fruits.forEach(function (fruit, index) {
  console.log("Fruit #" + (index + 1) + ": " + fruit);
});

fruits.push("mango");


fruits.splice(2, 1); 

console.log("Updated fruits:", fruits);

let firstThreeFruits = fruits.slice(0, 3);
console.log("First 3 fruits:", firstThreeFruits);
