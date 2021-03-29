const pricePerMeter = 6000;
const rangeFormElement = document.getElementById("square-range"); 
const numberFormElement = document.getElementById("square-input");
const totalPriceElement = document.getElementById("total-price");
const typeReconstructionElements = document.querySelectorAll('input[name="type"]');
const typeBuildingElements = document.querySelectorAll('input[name="building"]');
const typeRoomElements = document.querySelectorAll('input[name="rooms"]');
const ceilingElement = document.querySelector('input[name="ceiling"]');
const wallElement = document.querySelector('input[name="walls"]');
const floorElement = document.querySelector('input[name="floor"]');
rangeFormElement.addEventListener("input", function(){
    numberFormElement.value = rangeFormElement.value;
});
numberFormElement.addEventListener("input", function(){
    rangeFormElement.value = numberFormElement.value;
});
const formInputElements = document.querySelectorAll("input");
formInputElements.forEach(function(inputItem){
    inputItem.addEventListener("input",calculate);
});

calculate();
function calculate() {
  const square = +rangeFormElement.value;
  let typeReconstructionCost;
  typeReconstructionElements.forEach(function(reconscructionItem){
      if (reconscructionItem.checked) {
          typeReconstructionCost = +reconscructionItem.value;
      }
  });
  let typeBuildingCost;
  typeBuildingElements.forEach(function(buildingItem){
       if (buildingItem.checked){
           typeBuildingCost = +buildingItem.value;
       }
  });
  let typeRoomCost;
  typeRoomElements.forEach(function(roomItem){
      if (roomItem.checked) {
          typeRoomCost = +roomItem.value;
      }
  });
  const ceilingCost = (ceilingElement.checked) ? +ceilingElement.value : 1;
  const wallCost = (wallElement.checked) ? +wallElement.value : 1;
  const floorCost = (floorElement.checked) ? +floorElement.value : 1;
  const totalPrice = pricePerMeter * square * typeReconstructionCost * typeBuildingCost * typeRoomCost * ceilingCost * wallCost * floorCost;
  const formatter = new Intl.NumberFormat('ru');
  const result = formatter.format(totalPrice);
  totalPriceElement.textContent = result;
}
