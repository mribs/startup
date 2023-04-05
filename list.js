function getUserName() {
    return localStorage.getItem('userName') ?? 'Your';
};
const userNameEl = document.querySelector('.userName');
userNameEl.textContent = this.getUserName() + "\'s";
      
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

//FIXME: something here isn't exactly working, I think it is only saving one item
   function loadList() {
    let items = [];
    const itemText = localStorage.getItem('items');
    if (itemText) {
        items = JSON.parse(itemText);
    }

    const listBodyEl = document.querySelector('#box');

    if (items.length) {
        for (const [i, item] of items.entries()) {
            const itemTdEl = document.createElement('newItem');
        }
    }
   }

   loadList();