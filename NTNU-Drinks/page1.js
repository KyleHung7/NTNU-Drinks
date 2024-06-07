// 檢查瀏覽器是否支援 localStorage
function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        let x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return false;
    }
}

// 初始化清單
let considerations = [];
if (storageAvailable('localStorage')) {
    let savedConsiderations = localStorage.getItem("considerations");
    if (savedConsiderations) {
        considerations = JSON.parse(savedConsiderations);
    }
}

// 加入飲料到清單
function addToConsideration() {
    let selectedDrink = document.getElementById("drinkSelect").value;
    considerations.push(selectedDrink);
    renderConsiderations();
    if (storageAvailable('localStorage')) {
        localStorage.setItem("considerations", JSON.stringify(considerations));
    }
}

// 移除清單中的飲料
function removeConsideration(index) {
    considerations.splice(index, 1);
    renderConsiderations();
    if (storageAvailable('localStorage')) {
        localStorage.setItem("considerations", JSON.stringify(considerations));
    }
}

// 顯示清單
function renderConsiderations() {
    let considerationListElement = document.getElementById("considerationList");
    considerationListElement.innerHTML = "";
    considerations.forEach(function(drink, index) {
        let listItem = document.createElement("li");
        listItem.textContent = drink;
        let removeButton = document.createElement("button");
        removeButton.textContent = "❌";
        removeButton.onclick = function() {
            removeConsideration(index);
        };
        listItem.appendChild(removeButton);
        considerationListElement.appendChild(listItem);
    });
}
function addToConsideration() {
    if (considerations.length < 11) {
        let selectedDrink = document.getElementById("drinkSelect").value;
        considerations.push(selectedDrink);
        renderConsiderations();
        if (storageAvailable('localStorage')) {
            localStorage.setItem("considerations", JSON.stringify(considerations));
        }
    } else {
        alert('You can only add up to 11 drinks.');
    }
}

// Load considerations from localStorage on page load
window.onload = function() {
    if (storageAvailable('localStorage')) {
        const storedConsiderations = localStorage.getItem("considerations");
        if (storedConsiderations) {
            considerations = JSON.parse(storedConsiderations);
            renderConsiderations();
        }
    }
}



// 初始化顯示清單
renderConsiderations();
