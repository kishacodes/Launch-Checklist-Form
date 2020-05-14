// Write your JavaScript code here!
//validate all text entries

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function () {
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");
    if (
      pilotNameInput.value === "" ||
      (copilotNameInput.value === "") | (fuelLevelInput.value === "") ||
      cargoMassInput === ""
    ) {
      alert("All fields required.");
    } else if (pilotNameInput.value >= 0 || copilotNameInput.value >= 0) {
      alert("Pilot names must be entered with letters.");
    } else if (
      isNaN(cargoMassInput.value) === true ||
      isNaN(fuelLevelInput.value) === true
    ) {
      alert("Fuel Level and Cargo Mass must be entered as numbers.");
      preventDefault();
    }
  });
});

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
