// Write your JavaScript code here!
//validate all text entries
window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let pilotNameInput = document.querySelector("input[name=pilotName]").value;
    let copilotNameInput = document.querySelector("input[name=copilotName]")
      .value;
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]").value;
    let cargoMassInput = document.querySelector("input[name=cargoMass]").value;

    let pilotStatus = document.getElementById("pilotStatus").value;
    let copilotStatus = document.getElementById("copilotStatus").value;
    let fuelStatus = document.getElementById("fuelStatus").value;
    let cargoStatus = document.getElementById("cargoStatus").value;
    if (
      pilotNameInput === "" ||
      copilotNameInput === "" ||
      fuelLevelInput === "" ||
      cargoMassInput === ""
    ) {
      alert("All fields required.");
    } else if (
      !isNaN(Number(pilotNameInput)) ||
      !isNaN(Number(copilotNameInput))
    ) {
      alert("Pilot names must be entered with letters.");
    } else if (isNaN(cargoMassInput) || isNaN(fuelLevelInput)) {
      alert("Fuel Level and Cargo Mass must be entered as numbers.");
    } else {
      document.getElementById("faultyItems").style.visibility = "visible";
    }
  });
});

// function process() {
//   let pilotVar = document.form.pilotName.value;
// }

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
