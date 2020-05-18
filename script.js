// Write your JavaScript code here!
//validate all text entries
"use strict";
window.addEventListener("DOMContentLoaded", function () {
  //Form validation and output upon submit
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
      function updateInfo() {
        document.getElementById(
          "pilotStatus"
        ).innerHTML = `Pilot ${pilotNameInput} is Ready`;
        document.getElementById(
          "copilotStatus"
        ).innerHTML = `Pilot ${copilotNameInput} is Ready`;
        if (fuelLevelInput < 10000) {
          document.getElementById(
            "fuelStatus"
          ).innerHTML = `Shuttle not ready for launch`;
          document.getElementById("fuelStatus").style.color = "red";
        }
      }
      function updateCargo() {
        if (cargoMassInput > 10000) {
          document.getElementById(
            "cargoStatus"
          ).innerHTML = `Shuttle not ready for launch`;
          document.getElementById("cargoStatus").style.color = "red";
        }
      }
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("cargoStatus").style.color = "green";
      document.getElementById("fuelStatus").style.color = "green";
      updateInfo();
      updateCargo();
    }
  });

  let json = [];
  fetch("https://handlers.education.launchcode.org/static/planets.json").then(
    function (response) {
      response.json().then(function (json) {
        // const destination = document.getElementById("destination");
        const missionTarget = document.getElementById("missionTarget");
        // missionTarget.addEventListener("load", function () {
        let index = 3;
        missionTarget.innerHTML += `<div>
  <h2>Mission Destination</h2>
<ol>
<li>Name: ${json[index].name}}</li>
<li>Diameter: ${json[index].diameter}</li>
<li>Star: ${json[index].star}</li>
<li>Distance from Earth: ${json[index].distance}</li>
<li>Number of Moons: ${json[index].moons}</li>
</ol>
<img src="${json[index].image}"></img>
</div>
`;
        // });
      });
    }
  );
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
