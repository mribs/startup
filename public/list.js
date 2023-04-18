function getUserName() {
    return localStorage.getItem('userName') ?? 'Your';
};
const userNameEl = document.querySelector('.userName');
userNameEl.textContent = this.getUserName() + "'s";
      
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

// //FIXME: something here isn't exactly working, I think it is only saving one item
// function saveList() {

// }


 
 

// async function loadList() {
//   let list = [];
//   try {
//     // Get the latest high scores from the service
//     const response = await fetch('/api/list');
//     list = await response.json();

//     // Save the scores in case we go offline in the future
//     localStorage.setItem('list', JSON.stringify(list));
//   } catch {
//     // If there was an error then just use the last saved scores
//     const listText = localStorage.getItem('list');
//     if (listText) {
//       list = JSON.parse(listText);
//     }
//   }

//   displaylist(list);
// }
// function displayList(list) {
//   if (list.length) {
//     // Update the DOM with the scores
//     for (const [i, list] of list.entries()) {
//       const item = document.createElement('newItem');

//       item.textContent = list;

//     }
//   } else {
//     tableBodyEl.innerHTML = '<tr><td colSpan=4>Be the first to score</td></tr>';
//   }
// }

// loadList();