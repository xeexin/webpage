const age = parseInt(prompt("How old are you?"));

if (isNaN(age) || age < 0) {
  console.log("Please Write a positive number");
} else if (age < 18) {
  console.log("Your too young");
} else if (age >= 18 && age <= 70) {
  console.log("Enjoy");
} else {
  console.log("Keep healthy");
}
