console.log("Welcome to Pavilion Kitchen - Final Balanced Edition");

// 1. CENTRAL MENU DATABASE: Property names are perfectly unified to "desc"
const menuItems = [
  // Burgers Category
  { id: "burg_1", category: "Gourmet Burgers", name: "The Classic Cafe Cheeseburger", price: 8.00, desc: "Premium beef patty, melted cheddar, lettuce, tomato, pickles."},
  { id: "burg_2", category: "Gourmet Burgers", name: "The Classic Cafe Cheeseburger Meal", price: 17.00, desc: "Contains the Classic Cafe Cheeseburger along with Large Fries, Chicken Nuggets." },
  { id: "burg_3", category: "Gourmet Burgers", name: "Buttermilk Fried Chicken Burger", price: 12.00, desc: "Crispy fried chicken breast, pickles, and mayo." },
  { id: "burg_4", category: "Gourmet Burgers", name: "Buttermilk Fried Chicken Burger Meal", price: 17.00, desc: "Contains the Buttermilk Fried Chicken Burger along with Large Fries and Crispy Bacon."},
  { id: "burg_5", category: "Gourmet Burgers", name: "Smoky BBQ Bacon Burger", price: 11.00, desc: "Beef patty, crispy bacon and onion rings, along with smoky barbecue sauce." },
  { id: "burg_6", category: "Gourmet Burgers", name: "Smashed Avocado & Veggie Burger", price: 11.00, desc: "Plant-based patty, smashed avocado, rocket, and garlic aioli." },

  // Pies Category
  { id: "pie_1", category: "Savoury Pies", name: "Chunky Steak & Mushroom Pie", price: 5.00, desc: "Slow-cooked beef in a rich gravy with mushrooms, enhanced with a puff pastry." },
  { id: "pie_2", category: "Savoury Pies", name: "Classic Mince & Cheese Pie", price: 5.00, desc: "Seasoned lean minced beef with a thick layer of melted cheddar or mozzarella." },
  { id: "pie_3", category: "Savoury Pies", name: "Creamy Chicken & Leek Pie", price: 5.00, desc: "Tender chicken breast pieces cooked in a creamy white wine and leek sauce." },
  { id: "pie_4", category: "Savoury Pies", name: "Roasted Vegetable & Feta Pie", price: 5.00, desc: "Seasonal roasted vegetables with crumbled feta cheese in a crusty pastry." },

  // Steaks Category
  { id: "steak_1", category: "Steaks", name: "Eye Fillet (Filet Mignon)", price: 25.00, desc: "Tender eye fillet grilled to perfection." },
  { id: "steak_2", category: "Steaks", name: "Ribeye (Scotch Fillet)", price: 27.00, desc: "Juicy scotch fillet cooked to your liking." },
  { id: "steak_3", category: "Steaks", name: "New York Strip", price: 25.00, desc: "Classic strip steak seasoned and grilled." },
  { id: "steak_4", category: "Steaks", name: "Ribeye (Scotch Fillet) Meal", price: 27.00, desc: "Juicy scotch fillet along with Large Fries and Crispy Bacon." },  

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
  { id: "drink_8", category: "Drinks", name: "Frozen Raspberry", price: 3.50, desc: "Icy, slushy, frozen pink Fanta treat." },

  // Extras Category
  { id: "extra_1", category: "Extras", name: "Large Side of Chips", price: 4.00, desc: "Thick-cut chunky pub style chips seasoned with sea salt." },
  { id: "extra_2", category: "Extras", name: "Crispy Bacon", price: 3.50, desc: "Add an extra portion of perfectly crisped bacon rasher strips." },
  { id: "extra_3", category: "Extras", name: "Chicken Nuggets", price: 6.00, desc: "Golden, bite-sized chicken nuggets served with choice of dipping sauce." },
  { id: "extra_4", category: "Extras", name: "Crispy Onion Rings", price: 5.00, desc: "Battered and deep-fried whole onion rings served crunchy and warm." },
  { id: "extra_5", category: "Extras", name: "Garlic Bread", price: 3.00, desc: "Toasted baguette slices layered with premium herb and garlic butter." },
  { id: "extra_6", category: "Extras", name: "Mozzarella Sticks", price: 5.00, desc: "Golden-fried, mozzarella sticks with warm marinara dipping sauce." },
];

// 2. STORAGE ENGINE: Reads flat string lists from local application memory
function getRawCart() {
  try {
    return JSON.parse(localStorage.getItem("cartItemIds")) || [];
  } catch (e) {
    return [];
  }
}

// 3. TALLY COUNTER MAP: Transforms ID string collections into quantity pairs
function getCartQuantities() {
  const rawCart = getRawCart();
  let counts = {};
  rawCart.forEach(itemId => {
    counts[itemId] = (counts[itemId] || 0) + 1;
  });
  return counts;
}

// 4. MULTI-ITEM OPERATIONS: Append or delete items smoothly
function addToCart(itemId) {
  let currentCart = getRawCart();
  currentCart.push(itemId);
  localStorage.setItem("cartItemIds", JSON.stringify(currentCart));
  updateInterface();
}

function removeFromCart(itemId) {
  let currentCart = getRawCart();
  const index = currentCart.indexOf(itemId);
  if (index > -1) {
    currentCart.splice(index, 1);
  }
  localStorage.setItem("cartItemIds", JSON.stringify(currentCart));
  updateInterface();
}

function toggleItemSelection(itemId, isChecked) {
  if (isChecked) {
    addToCart(itemId);
  } else {
    let currentCart = getRawCart().filter(id => id !== itemId);
    localStorage.setItem("cartItemIds", JSON.stringify(currentCart));
    updateInterface();
  }
}

// 5. GRID GENERATION LAYOUT: Dynamically paints item rows onto the web page interface for Ordering.html
function renderMenuLayout() {
  const container = document.getElementById("menuContainer");
  if (!container) return; // Safely exit if running on Menu.html to prevent script errors
  
  container.innerHTML = ""; 
  const itemQuantities = getCartQuantities();
  const categories = [...new Set(menuItems.map(item => item.category))];

  categories.forEach(catName => {
    const block = document.createElement("div");
    block.className = "category-block";
    block.style.marginBottom = "25px";
    
    const headerTitle = document.createElement("div");
    headerTitle.className = "category-title";
    headerTitle.style = "margin: 15px 0 10px 0; color: #27ae60; font-weight: bold; font-size: 1.15rem; text-align: left;";
    headerTitle.textContent = catName;
    block.appendChild(headerTitle);

    const itemsInCat = menuItems.filter(item => item.category === catName);

    itemsInCat.forEach(item => {
      const qty = itemQuantities[item.id] || 0;
      const isSelected = qty > 0;

      const itemRow = document.createElement("div");
      itemRow.className = "menu-item-row";
      itemRow.style = `
        border: 1px solid ${isSelected ? '#27ae60' : '#ddd'};
        background-color: ${isSelected ? '#f0fff4' : '#fff'};
        padding: 12px;
        margin-bottom: 10px;
        border-radius: 4px;
        text-align: left;
        display: flex;
        flex-direction: column;
      `;

      const qtyBadge = isSelected ? ` <span style="color: #27ae60; font-weight: bold;">(x${qty})</span>` : "";

      itemRow.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display: flex; gap: 10px; align-items: center;">
            <input type="checkbox" ${isSelected ? 'checked' : ''} onchange="toggleItemSelection('${item.id}', this.checked)" style="transform: scale(1.15); cursor: pointer;">
            <span style="font-weight: bold; color: #111;">${item.name}${qtyBadge}</span>
          </div>
          <span style="color: #27ae60; font-weight: bold;">$${item.price.toFixed(2)}</span>
        </div>
        <div style="font-size: 0.85rem; color: #555; margin: 6px 0 8px 26px; line-height: 1.4;">
          ${item.desc}
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-left: 26px;">
          <button id="btn_${item.id}" class="order-btn" onclick="addToCart('${item.id}'); event.stopPropagation();" style="background: #27ae60; color: white; border: none; padding: 5px 12px; border-radius: 4px; font-size: 0.8rem; cursor: pointer; font-weight: bold;">Add to Order</button>
          ${isSelected ? `
            <span class="remove-link" onclick="removeFromCart('${item.id}'); event.stopPropagation();" style="color: #c0392b; text-decoration: underline; cursor: pointer; font-size: 0.85rem; font-weight: bold;">Remove 1</span>
          ` : ''}
        </div>
      `;
      block.appendChild(itemRow);
    });
    container.appendChild(block);
  });
}

// 5b. HARDCODED CARD LAYOUT SYNC LAYER: Updates static menu cards on Menu.html
function syncStaticCardLayout() {
  // Gets the current quantities of all items in the cart
  const itemQuantities = getCartQuantities();
  
  // Loops through every item in the master menu database
  menuItems.forEach(item => {
    // Finds the "Order This Item" button for this specific item on Menu.html
    const targetBtn = document.querySelector(`button[onclick="selectAndGo('${item.id}')"]`);
    if (!targetBtn) return; // Skip if this item isn't displayed on the current page

    // Finds the card element container that holds this button
    const cardBlock = targetBtn.closest(".menu-item-card");
    if (!cardBlock) return; // Skip if the HTML structure is missing the card class

    // Gets the quantity for this item (default to 0 if not in cart)
    const qty = itemQuantities[item.id] || 0;

    // Checks if the user has added at least 1 unit of this item to the cart
    if (qty > 0) {
      // Highlight the card with a green border and light green background
      cardBlock.style.borderColor = "#27ae60";
      cardBlock.style.backgroundColor = "#f0fff4";
      cardBlock.style.borderStyle = "solid";
      cardBlock.style.borderWidth = "1px";
      
      // Updates the button text to show the current quantity
      targetBtn.textContent = `Order This Item (x${qty})`;
      targetBtn.style.backgroundColor = "#2ecc71"; // Change button to bright green

      // Checks if a "Remove 1" link already exists for this card
      let removeLink = cardBlock.querySelector(`.remove-link-${item.id}`);
      if (!removeLink) {
        // Create a new "Remove 1" clickable link
        removeLink = document.createElement("span");
        removeLink.className = `remove-link-${item.id}`;
        removeLink.textContent = "Remove 1";
        
        // Styles the link so it looks like a red underlined option next to the button
        removeLink.style = "color: #c0392b; text-decoration: underline; cursor: pointer; font-size: 0.85rem; font-weight: bold; margin-left: 15px; display: inline-block; vertical-align: middle;";
        
        // Handles clicking the "Remove 1" option
        removeLink.onclick = function(e) {
          e.stopPropagation();     // Prevent the click from triggering any card-level events
          removeFromCart(item.id); // Remove exactly 1 unit of this item from the cart
        };
        
        // Inserts the "Remove 1" link directly after the primary action button
        targetBtn.parentNode.insertBefore(removeLink, targetBtn.nextSibling);
      }
    } else {
      // Clears the green highlight styling if the item quantity is 0
      cardBlock.style.borderColor = "";
      cardBlock.style.backgroundColor = "";
      cardBlock.style.borderStyle = "";
      cardBlock.style.borderWidth = "";
      
      // Resets the button text and color back to defaults
      targetBtn.textContent = "Order This Item";
      targetBtn.style.backgroundColor = "";
      
      // Finds and completely remove the "Remove 1" link if it exists
      const removeLink = cardBlock.querySelector(`.remove-link-${item.id}`);
      if (removeLink) removeLink.remove();
    }
  });
}


// 6. SYNC ENGINE: Keeps prices, lists, and view structures fully matched on Ordering.html
function updateInterface() {
  renderMenuLayout();
  syncStaticCardLayout();

  const previewName = document.getElementById("previewName");
  const previewPrice = document.getElementById("previewPrice");
  if (!previewName || !previewPrice) return;

  const itemQuantities = getCartQuantities();
  let totalCost = 0;
  let itemsHtml = "";

  for (const itemId in itemQuantities) {
    const itemMatch = menuItems.find(i => i.id === itemId);
    if (itemMatch) {
      const qty = itemQuantities[itemId];
      totalCost += itemMatch.price * qty;
      itemsHtml += `<div style="color: #27ae60; font-weight: bold; margin-bottom: 3px;">+ ${qty}x ${itemMatch.name}</div>`;
    }
  }

  if (itemsHtml === "") {
    previewName.innerHTML = "None Selected";
    previewName.style.color = "";
    previewPrice.textContent = "$0.00";
  } else {
    previewName.innerHTML = itemsHtml;
    previewPrice.textContent = `$${totalCost.toFixed(2)}`;
  }
}

// 7. ORDERING SYSTEM CHECKOUT: Validates data fields and launches checkout layouts
function processOrder() {
  const customerNameInput = document.getElementById("customerName");
  const cashPaidInput = document.getElementById("cashPaid");
  const errorAlert = document.getElementById("errorAlert");
  const receiptContainer = document.getElementById("receiptContainer");

  const customerName = customerNameInput ? customerNameInput.value.trim() : "";
  const cashPaidValue = cashPaidInput ? cashPaidInput.value : "";

  if (errorAlert) {
    errorAlert.style.display = "none";
    errorAlert.textContent = "";
  }

  const itemQuantities = getCartQuantities();
  let totalCost = 0;
  let itemsSummaryArray = [];

  for (const itemId in itemQuantities) {
    const itemMatch = menuItems.find(i => String(i.id) === String(itemId));
    if (itemMatch) {
      const qty = itemQuantities[itemId];
      totalCost += itemMatch.price * qty;
      itemsSummaryArray.push(`${qty}x ${itemMatch.name}`);
    }
  }

  if (totalCost === 0) {
    if (errorAlert) {
      errorAlert.textContent = "No Selection: Please select at least one menu item by clicking the options.";
      errorAlert.style.display = "block";
    }
    return;
  }
  
  if (customerName === "") {
    if (errorAlert) {
      errorAlert.textContent = "Missing Field: Customer Name is required to place an order.";
      errorAlert.style.display = "block";
    }
    return;
  }

  const cashPaid = parseFloat(cashPaidValue);
  const shortByAmount = totalCost - (isNaN(cashPaid) ? 0 : cashPaid);

  if (isNaN(cashPaid) || cashPaid < totalCost) {
    if (errorAlert) {
      errorAlert.textContent = `Insufficient funds. Your order costs $${totalCost.toFixed(2)}. You are short by $${shortByAmount.toFixed(2)}.`;
      errorAlert.style.display = "block";
    }
    return;
  }

  if (errorAlert) {
    errorAlert.style.display = "none";
  }

  const changeDue = cashPaid - totalCost;
  const now = new Date();
  const timeString = now.toLocaleDateString() + " " + now.toLocaleTimeString();

  if (document.getElementById("receiptTime")) document.getElementById("receiptTime").textContent = timeString;
  if (document.getElementById("rcptName")) document.getElementById("rcptName").textContent = customerName;
  if (document.getElementById("rcptItem")) document.getElementById("rcptItem").innerHTML = itemsSummaryArray.join("<br>");
  if (document.getElementById("rcptTotal")) document.getElementById("rcptTotal").textContent = `$${totalCost.toFixed(2)}`;
  if (document.getElementById("rcptCash")) document.getElementById("rcptCash").textContent = `$${cashPaid.toFixed(2)}`;
  if (document.getElementById("rcptChange")) document.getElementById("rcptChange").textContent = `$${changeDue.toFixed(2)}`;

  if (receiptContainer) {
    receiptContainer.style.display = "block";
  }
}

  // 7b. TUTORIALS REFERENCED: 

  // https://www.youtube.com/watch?v=NO5kUNxGIu0 // The JavaScript DOM explained in 5 minutes!
  // https://www.youtube.com/watch?v=In0nB0ABaUk // JavaScript Form Validation
  // https://www.youtube.com/watch?v=wsTv9y931o8 // Learn CSS Flexbox in 20 Minutes (Course)
  




// 8. CLEAR RESET METHOD: Wipes cache memory data back to fresh states
function resetForm() {
  localStorage.removeItem("cartItemIds");
  if (document.getElementById("customerName")) document.getElementById("customerName").value = "";
  if (document.getElementById("cashPaid")) document.getElementById("cashPaid").value = "";
  if (document.getElementById("receiptContainer")) document.getElementById("receiptContainer").style.display = "none";
  if (document.getElementById("errorAlert")) document.getElementById("errorAlert").style.display = "none";
  updateInterface();
}

// 9. HIGH VISIBILITY MENU CARD CLICK INTERCEPTOR
function selectAndGo(itemId) {
  addToCart(itemId);
}

// 10. CROSS-PAGE WINDOWS SYNC EVENT LISTENER
window.addEventListener("storage", function(event) {
  if (event.key === "cartItemIds") {
    updateInterface();
  }
});

// 11. INITIAL RUNTIME ENGINE LOAD HOOK
window.onload = function() {
  updateInterface();
  
  window.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      processOrder();
    } else 
      if (event.key === "Backspace") 
        {if (document.activeElement.tagName !== "INPUT" && document.activeElement.tagName !== "TEXTAREA") 
          {resetForm();}}});};




// 12. AUTOMATED HOME BANNER SLIDESHOW SYSTEM
let currentSlideIndex = 0;

function runSlideshow() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");
  if (slides.length === 0) return;

  // Remove active markers from the current elements
  slides[currentSlideIndex].classList.remove("active");
  if (dots.length > 0) dots[currentSlideIndex].classList.remove("active-dot");

  // Step index counter forward
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;

  // Apply visibility classes to the new match elements
  slides[currentSlideIndex].classList.add("active");
  if (dots.length > 0) dots[currentSlideIndex].classList.add("active-dot");
}

// Slideshow Idea also came from Udan R and Sandro N. Two Year 11's at HVHS.


// Global browser initiation execution layer
window.addEventListener("load", function() {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (slides.length > 0) {
    // Clear inline display properties to let CSS take over
    slides.forEach(s => s.style.display = "");
    
    
    slides[0].classList.add("active");
    if (dots.length > 0) dots[0].classList.add("active-dot");
    
    // Trigger loop execution cycle sequence
    setInterval(runSlideshow, 3500);
  }
});
