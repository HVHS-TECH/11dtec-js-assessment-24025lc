console.log("Welcome to Pavilion Kitchen - Multi-Item Edition");

// 1. UPDATED REAL DATASET
const menuItems = [
  { id: "burg_0", category: "Burgers", name: "The Classic Cafe Cheeseburger Meal", price: 17.00, desc: "Premium beef patty, melted cheddar, lettuce, tomato, pickles, and signature house burger sauce along with Large Fries and Chicken Nuggets." },
  { id: "burg_1", category: "Burgers", name: "Buttermilk Fried Chicken Burger", price: 12.00, desc: "Crispy fried chicken breast, creamy slaw, pickles, and spicy chipotle mayo." },
  { id: "burg_2", category: "Burgers", name: "Smoky BBQ Bacon Burger", price: 11.00, desc: "Beef patty, crispy bacon, cheddar, crispy onion rings, and smoky barbecue sauce." },
  { id: "burg_3", category: "Burgers", name: "Smashed Avocado & Veggie Burger", price: 11.00, desc: "Plant-based patty, smashed avocado, rocket, tomato, and garlic aioli." },
  { id: "pie_1", category: "Pies", name: "Chunky Steak & Mushroom Pie", price: 5.00, desc: "Slow-cooked beef chunks in a rich gravy with button mushrooms, encased in a flaky puff pastry." },
  { id: "pie_2", category: "Pies", name: "Classic Mince & Cheese Pie", price: 5.00, desc: "Seasoned lean minced beef with a thick layer of melted cheddar or mozzarella." },
  { id: "pie_3", category: "Pies", name: "Creamy Chicken & Leek Pie", price: 5.00, desc: "Tender chicken breast pieces cooked in a creamy white wine and leek sauce." },
  { id: "pie_4", category: "Pies", name: "Roasted Vegetable & Feta Pie", price: 5.00, desc: "Seasonal roasted Mediterranean vegetables with crumbled feta cheese in a shortcrust pastry." }
];

// CRITICAL TRACKING ARRAY: Stores all selected item IDs
let selectedItemIds = [];

// 2. AUTOMATIC INITIALIZATION LOGIC
document.addEventListener("DOMContentLoaded", () => {
  renderWireframeMenu();
  checkCrossPageRedirect();
});

function renderWireframeMenu() {
  const targetContainer = document.getElementById("menuContainer");
  if (!targetContainer) return;
  
  targetContainer.innerHTML = ""; 
  const categories = [];
  
  menuItems.forEach(item => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });

  categories.forEach(catName => {
    const block = document.createElement("div");
    block.className = "category-block";
    const headerTitle = document.createElement("div");
    headerTitle.className = "category-title";
    headerTitle.style = "margin: 15px 0 5px 0; color: #27ae60; font-weight: bold;";
    headerTitle.textContent = catName;
    block.appendChild(headerTitle);
    
    const grid = document.createElement("div");
    grid.className = "grid-menu";
    const items = menuItems.filter(item => item.category === catName);
    
    items.forEach(item => {
      const itemRow = document.createElement("div");
      itemRow.className = "menu-row-item";
      itemRow.id = `row_${item.id}`;
      itemRow.onclick = () => toggleItemSelection(item.id);
      itemRow.style = "padding: 10px; margin-bottom: 6px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; display: flex; gap: 10px; transition: 0.2s;";
      
      // RULE CHANGED: Input modified from 'radio' to 'checkbox' to support multi-select
      itemRow.innerHTML = `
        <div class="item-checkbox-wrapper"> 
          <input type="checkbox" id="chk_${item.id}" value="${item.id}" onclick="event.stopPropagation(); toggleItemSelection('${item.id}');"> 
        </div> 
        <div class="item-details" style="flex-grow: 1;"> 
          <div class="item-name-row" style="display: flex; justify-content: space-between; font-weight: bold;"> 
            <span>${item.name}</span> 
            <span class="item-price-tag" style="color: #27ae60;">$${item.price.toFixed(2)}</span> 
          </div> 
          <div class="item-desc" style="font-size: 0.85rem; color: #666; font-weight: normal; margin-top: 4px;">${item.desc}</div> 
        </div>`;
      grid.appendChild(itemRow);
    });
    block.appendChild(grid);
    targetContainer.appendChild(block);
  });
}

// 3. TOGGLE MULTIPLE SELECTIONS ENGINE
function toggleItemSelection(itemId) {
  const index = selectedItemIds.indexOf(itemId);
  
  if (index > -1) {
    // Item is already selected, so remove it (uncheck)
    selectedItemIds.splice(index, 1);
  } else {
    // Item is new, so add it to our list
    selectedItemIds.push(itemId);
  }
  
  // Sync visual styles and update checkboxes
  updateUISelectionStates();
  calculateLivePreview();
}

function updateUISelectionStates() {
  menuItems.forEach(item => {
    const row = document.getElementById(`row_${item.id}`);
    const checkbox = document.getElementById(`chk_${item.id}`);
    
    if (row && checkbox) {
      if (selectedItemIds.includes(item.id)) {
        row.classList.add("selected");
        row.style.borderColor = "#27ae60";
        row.style.background = "#e8f8f0";
        checkbox.checked = true;
      } else {
        row.classList.remove("selected");
        row.style.borderColor = "#ddd";
        row.style.background = "#f9f9f9";
        checkbox.checked = false;
      }
    }
  });
}

// 4. LIVE RUNNING TOTAL CALCULATOR
function calculateLivePreview() {
  if (selectedItemIds.length === 0) {
    document.getElementById("previewName").textContent = "None Selected";
    document.getElementById("previewPrice").textContent = "$0.00";
    return;
  }
  
  let totalCost = 0;
  let namesArray = [];
  
  selectedItemIds.forEach(id => {
    const itemMatch = menuItems.find(i => i.id === id);
    if (itemMatch) {
      totalCost += itemMatch.price;
      namesArray.push(itemMatch.name);
    }
  });
  
  // Display compiled item lists in live preview panel
  document.getElementById("previewName").innerHTML = namesArray.join("<br>+ ");
  document.getElementById("previewPrice").textContent = `$${totalCost.toFixed(2)}`;
}

// 5. REDIRECT PARSER FROM MENU.HTML
function checkCrossPageRedirect() {
  const sharedId = localStorage.getItem("selectedItemId");
  if (sharedId) {
    selectedItemIds.push(sharedId);
    updateUISelectionStates();
    calculateLivePreview();
    localStorage.removeItem("selectedItemId"); 
  }
}

// 6. TOTAL TRANSACTION ENGINE (SUMS TOTAL BALANCES)
function processOrder() {
  const nameNode = document.getElementById("customerName");
  const cashNode = document.getElementById("cashPaid");
  const alertBox = document.getElementById("errorAlert");
  const receiptBox = document.getElementById("receiptContainer");
  const customerName = nameNode.value.trim();
  const cashValue = parseFloat(cashNode.value);
  
  alertBox.style.display = "none";
  receiptBox.style.display = "none";
  
  if (customerName === "") {
    triggerError("Missing Field: Customer Name is required to place an order.");
    return;
  }
  if (selectedItemIds.length === 0) {
    triggerError("No Selection: Please select at least one menu item by checking the options.");
    return;
  }
  if (isNaN(cashValue) || cashValue < 0) {
    triggerError("Invalid Payment: Please input a valid currency total amount paid.");
    return;
  }
  
  // Compute total dynamic running costs of all checked items
  let orderTotalCost = 0;
  let summaryItemNames = [];
  
  selectedItemIds.forEach(id => {
    const matchedObject = menuItems.find(item => item.id === id);
    if (matchedObject) {
      orderTotalCost += matchedObject.price;
      summaryItemNames.push(matchedObject.name);
    }
  });
  
  if (cashValue < orderTotalCost) {
    triggerError(`Insufficient Funds: Your order costs $${orderTotalCost.toFixed(2)}. You are short by $${(orderTotalCost - cashValue).toFixed(2)}.`);
    return;
  }
  
  let balanceChange = cashValue - orderTotalCost;
  
  // Render details onto the 5 receipt elements
  document.getElementById("rcptName").textContent = customerName;
  document.getElementById("rcptItem").innerHTML = summaryItemNames.join("<br> ");
  document.getElementById("rcptItemCost").innerHTML = `$${orderTotalCost.toFixed(2)}`;
  document.getElementById("rcptTotal").textContent = `$${orderTotalCost.toFixed(2)}`;
  document.getElementById("rcptCash").textContent = `$${cashValue.toFixed(2)}`;
  document.getElementById("rcptChange").textContent = `$${balanceChange.toFixed(2)}`;
  document.getElementById("receiptTime").textContent = new Date().toLocaleString('en-NZ');
  
  receiptBox.style.display = "block";
  receiptBox.scrollIntoView({ behavior: 'smooth' });
}

function triggerError(msgText) {
  const alertBox = document.getElementById("errorAlert");
  alertBox.textContent = msgText;
  alertBox.style.display = "block";
}

// 7. COMPLETED MULTI-SELECT RESET ENGINE
function resetForm() {
  document.getElementById("orderForm").reset();
  
  // Flush programmatic data array clean
  selectedItemIds = [];
  
  document.getElementById("previewName").textContent = "None Selected";
  document.getElementById("previewPrice").textContent = "$0.00";
  
  // Clear layout borders and uncheck checkboxes
  const clearRows = document.querySelectorAll(".menu-row-item");
  clearRows.forEach(row => {
    row.classList.remove("selected");
    row.style.borderColor = "#ddd";
    row.style.background = "#f9f9f9";
  });
  
  const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
  checkBoxes.forEach(box => box.checked = false);
  
  document.getElementById("errorAlert").style.display = "none";
  document.getElementById("receiptContainer").style.display = "none";
}