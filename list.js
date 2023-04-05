     

      
  window.addEventListener("DOMContentLoaded", () => {
  
    const inputGroups = [document.getElementById("newItem")];
    const inputBoxes = document.querySelectorAll("#box");
    let addLine = function (event) {
      if (event.keyCode === 13) {
        const lastInputGroup = inputGroups[inputGroups.length - 1];
        const newInputGroup = lastInputGroup.cloneNode(true);
        const newInputBox = newInputGroup.querySelector("#box");
        newInputBox.value = "";
        lastInputGroup.after(newInputGroup);
        inputGroups.push(newInputGroup);
        newInputBox.focus();

        // Assign the new last input group to the lastIndex variable
        
        newInputBox.addEventListener("keydown", addLine)
      }
    }

     inputBoxes.forEach((inputBox) => {
      inputBox.addEventListener("keydown", addLine);
    });
   });