let groceryList = ["Apples", "Boost Drink", "Butterscotch Ice Cream", "Tomato Ketchup", "Dairy Milk Chocolates", "Pasta"];

let bgContainer = document.getElementById("groceryListContainer");
bgContainer.classList.add("bgconatiner");
let headingEl = document.createElement("h1");
headingEl.classList.add("heading");
headingEl.textContent = "Grocery List"
bgContainer.appendChild(headingEl);

let ulContainer = document.createElement("ul");
ulContainer.classList.add("listcontainer");
bgContainer.appendChild(ulContainer);
for (let list of groceryList) {
    let listEle = document.createElement("li");
    listEle.textContent = list;
    listEle.style.color = "black";
    ulContainer.appendChild(listEle);

}