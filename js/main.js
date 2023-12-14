import { 
        dinnerForVegetarian,
        dinnerForFourOrLess, 
        dinnerForFiveOrMore } from "./dinnerData.js"

const btn = document.getElementById("btn")
const num = document.getElementById("num-input")
const vegetarian = document.getElementById("vegetarian-input")
const food = document.getElementById("food")

btn.addEventListener("click", () => {
  let selectedDinner;

  if (vegetarian.checked) {
    const randomIndex = Math.floor(Math.random() * dinnerForVegetarian.length)
    selectedDinner = dinnerForVegetarian[randomIndex]
  } else if (num.value < 5) {
    const randomIndex = Math.floor(Math.random() * dinnerForFourOrLess.length)
    selectedDinner = dinnerForFourOrLess[randomIndex]
  } else {
    const randomIndex = Math.floor(Math.random() * dinnerForFiveOrMore.length)
    selectedDinner = dinnerForFiveOrMore[randomIndex]
  }

  console.log("Selected dinner:", selectedDinner.title)
  
  const dishNameLink = `<a href="${selectedDinner.sections[0].dishes[0].URL}" target="_blank">${selectedDinner.sections[0].dishes[0].name}</a>`

  food.innerHTML = `
    <h2>${selectedDinner.title}:</h2>
    
    <p>${dishNameLink}
    <span class="txt-sm">${selectedDinner.sections[0].dishes[0].description}</span></p>
    <br>
    <p>Served with ${selectedDinner.sections[1].dishes[0].name} and 
    ${selectedDinner.sections[1].dishes[1].name}</p>
    <br>
    <p>And for dessert, ${selectedDinner.sections[2].dishes[0].name}
    <span class="txt-sm">${selectedDinner.sections[2].dishes[0].description}</span></p>
  `
})