const menuItems = [
  { id: "burg_0", category: "Gourmet Burgers", name: "The Classic Cafe Cheeseburger", price: 8.00, desc: "Premium beef patty, melted cheddar, lettuce, tomato, pickles."},
  { id: "burg_1", category: "Gourmet Burgers", name: "The Classic Cafe Cheeseburger Meal", price: 17.00, desc: "Premium beef patty, melted cheddar, lettuce, tomato, pickles, house burger sauce, Large Fries, and Nuggets." },
  { id: "burg_2", category: "Gourmet Burgers", name: "Buttermilk Fried Chicken Burger", price: 12.00, desc: "Crispy fried chicken breast, creamy slaw, pickles, and spicy chipotle mayo." },
  { id: "burg_3", category: "Gourmet Burgers", name: "Smoky BBQ Bacon Burger", price: 11.00, desc: "Beef patty, crispy bacon, cheddar, crispy onion rings, and smoky barbecue sauce." },
  { id: "burg_4", category: "Gourmet Burgers", name: "Smashed Avocado & Veggie Burger", price: 11.00, desc: "Plant-based patty, smashed avocado, rocket, tomato, and garlic aioli." },
  { id: "pie_1", category: "Savory Pies", name: "Chunky Steak & Mushroom Pie", price: 5.00, desc: "Slow-cooked beef chunks in a rich gravy with button mushrooms, encased in a flaky puff pastry." },
  { id: "pie_2", category: "Savory Pies", name: "Classic Mince & Cheese Pie", price: 5.00, desc: "Seasoned lean minced beef with a thick layer of melted cheddar or mozzarella." },
  { id: "pie_3", category: "Savory Pies", name: "Creamy Chicken & Leek Pie", price: 5.00, desc: "Tender chicken breast pieces cooked in a creamy white wine and leek sauce." },
  { id: "pie_4", category: "Savory Pies", name: "Roasted Vegetable & Feta Pie", price: 5.00, desc: "Seasonal roasted Mediterranean vegetables with crumbled feta cheese in a shortcrust pastry." },
  
  // Steaks Category
  { id: "steak_1", category: "Steaks", name: "Eye Fillet (Filet Mignon)", price: 25.00, desc: "Tender eye fillet grilled to perfection." },
  { id: "steak_2", category: "Steaks", name: "Ribeye (Scotch Fillet)", price: 27.00, desc: "Juicy scotch fillet cooked to your liking." },
  { id: "steak_3", category: "Steaks", name: "New York Strip", price: 25.00, desc: "Classic strip steak seasoned and grilled." },
  
  // Pastas Category
  { id: "pasta_1", category: "Pastas", name: "Chicken and Mushroom Fettuccine", price: 18.00, desc: "Fettuccine pasta with chicken and mushrooms in a creamy sauce." },
  { id: "pasta_2", category: "Pastas", name: "Basil Pesto and Bocconcini Fusilli", price: 16.00, desc: "Fusilli pasta tossed in basil pesto with fresh bocconcini." },
  { id: "pasta_3", category: "Pastas", name: "Chilli Garlic Prawn Linguine", price: 21.00, desc: "Linguine pasta with prawns in a spicy chilli garlic sauce." },
  { id: "pasta_4", category: "Pastas", name: "Extra Roasted Vegetable and Ricotta Cannelloni", price: 17.00, desc: "Cannelloni filled with roasted vegetables and ricotta cheese." },
  
  // Drinks Category
  { id: "drink_1", category: "Drinks", name: "Coke", price: 3.50, desc: "Refreshing classic Coca-Cola." },
  { id: "drink_2", category: "Drinks", name: "Fanta", price: 3.50, desc: "Bright and bubbly orange soda." },
  { id: "drink_3", category: "Drinks", name: "Sprite", price: 3.50, desc: "Crisp, clean lemon-lime soda." },
  { id: "drink_4", category: "Drinks", name: "Coke Zero", price: 3.50, desc: "Great Coca-Cola taste with zero sugar." },
  { id: "drink_5", category: "Drinks", name: "Frozen Coke", price: 3.50, desc: "Icy, slushy frozen classic Coca-Cola." },
  { id: "drink_6", category: "Drinks", name: "Frozen Sprite", price: 3.50, desc: "Icy, slushy frozen lemon-lime refreshing drink." },
  { id: "drink_7", category: "Drinks", name: "Frozen Fanta", price: 3.50, desc: "Icy, slushy frozen orange Fanta treat." },
  
  // Extras Category
  { id: "extra_1", category: "Extras", name: "Large Side of Chips", price: 4.00, desc: "Thick-cut chunky pub style chips seasoned with sea salt." },
  { id: "extra_2", category: "Extras", name: "Crispy Bacon", price: 3.50, desc: "Add an extra portion of perfectly crisped bacon rasher strips." },
  { id: "extra_3", category: "Extras", name: "Chicken Nuggets", price: 6.00, desc: "Golden, bite-sized chicken nuggets served with choice of dipping sauce." },
  { id: "extra_4", category: "Extras", name: "Crispy Onion Rings", price: 5.00, desc: "Battered and deep-fried whole onion rings served crunchy and warm." },
  { id: "extra_5", category: "Extras", name: "Garlic Bread", price: 3.00, desc: "Toasted baguette slices layered with premium herb and garlic butter." }
];

let selectedItemIds = [];

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
      
      itemRow.innerHTML = `
        <div class="item-checkbox-wrapper"> 
          <input type="checkbox" id="chk_${item.id}" value="${item.id}" style="pointer-events: none;"> 
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

function toggleItemSelection(itemId) {
  const index = selectedItemIds.indexOf(itemId);
  if (index > -1) {
    selectedItemIds.splice(index, 1);
  } else {
    selectedItemIds.push(itemId);
  }
  updateUISelectionStates();
  calculateLivePreview();
}

function updateUISelectionStates() {
  menuItems.forEach(item => {
    const row = document.getElementById(`row_${item.id}`);
    const checkbox = document.getElementById(`chk_${item.id}`);
    if (row && checkbox) {
      if (selectedItemIds.includes(item.id)) {
        row.style.borderColor = "#27ae60";
        row.style.background = "#e8f8f0";
        checkbox.checked = true;
      } else {
        row.style.borderColor = "#ddd";
        row.style.background = "#f9f9f9";
        checkbox.checked = false;
      }
    }
  });
}

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
  document.getElementById("previewName").innerHTML = namesArray.join("<br>+ ");
  document.getElementById("previewPrice").textContent = `$${totalCost.toFixed(2)}`;
}

// Intercept local memory data list passed from Menu.html clicks
function checkCrossPageRedirect() {
  let cart = JSON.stringify([]);
  try {
    cart = localStorage.getItem("cartItemIds") || JSON.stringify([]);
  } catch (e) {
    cart = JSON.stringify([]);
  }
  const incomingIds = JSON.parse(cart);
  
  if (incomingIds && incomingIds.length > 0) {
    selectedItemIds = incomingIds;
    updateUISelectionStates();
    calculateLivePreview();
    localStorage.removeItem("cartItemIds"); // Clean cart storage trail
  }
}

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
    triggerError("No Selection: Please select at least one menu item by clicking the options.");
    return;
  }
  if (isNaN(cashValue) || cashValue < 0) {
    triggerError("Invalid Payment: Please input a valid cash total paid.");
    return;
  }
  
  let orderTotalCost = 0;
  let summaryItemNames = [];
  selectedItemIds.forEach(id => {
    const matchedObject = menuItems.find(item => item.id === id);
    if (matchedObject) {
      orderTotalCost += matchedObject.price;
      summaryItemNames.push(`${matchedObject.name} ($${matchedObject.price.toFixed(2)})`);
    }
  });
  
  if (cashValue < orderTotalCost) {
    triggerError(`Insufficient Funds: Your order costs $${orderTotalCost.toFixed(2)}. You are short by $${(orderTotalCost - cashValue).toFixed(2)}.`);
    return;
  }
  
  let balanceChange = cashValue - orderTotalCost;
  
  document.getElementById("rcptName").textContent = customerName;
  document.getElementById("rcptItem").innerHTML = summaryItemNames.join("<br>");
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

function resetForm() {
  document.getElementById("orderForm").reset();
  selectedItemIds = [];
  document.getElementById("previewName").textContent = "None Selected";
  document.getElementById("previewPrice").textContent = "$0.00";
  updateUISelectionStates();
  document.getElementById("errorAlert").style.display = "none";
  document.getElementById("receiptContainer").style.display = "none";
  localStorage.removeItem("cartItemIds");
}
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    // Local storage array initialization
    if (!localStorage.getItem("cartItemIds")) {
      localStorage.setItem("cartItemIds", JSON.stringify([]));
    }

    function addToCart(itemId) {
      let cart = JSON.stringify([]);
      try {
        cart = localStorage.getItem("cartItemIds") || JSON.stringify([]);
      } catch (e) {
        cart = JSON.stringify([]);
      }
      let currentCart = JSON.parse(cart);
      
      if (!currentCart.includes(itemId)) {
        currentCart.push(itemId);
        localStorage.setItem("cartItemIds", JSON.stringify(currentCart));
      }
      
      // Give the user visual feedback that the item was added
      const btn = document.getElementById("btn_" + itemId);
      if (btn) {
        btn.textContent = "Added ✓";
        btn.style.backgroundColor = "#2ecc71";
        setTimeout(() => {
          btn.textContent = "Add to Order";
          btn.style.backgroundColor = "#27ae60";
        }, 1500);
      }
    }


    