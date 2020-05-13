// Write your JavaScript code here!
//validate all text entries
let allInfo = document.querySelectorAll("input[type=text]:checked");
if (pilotName.value === "" && formSubmit.value === "on") {
  alert("All fields are required!");
  event.preventDefault();
}
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
