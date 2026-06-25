console.log("Welcome to Pavilion Kitchen")

const FLAT_PRICE = 5.00;
const menuItems = [
{ id: "burg_1", category: "Burgers", name: "The Classic Cafe Cheeseburger", price: FLAT_PRICE, desc: "Premium beef patty, melted cheddar, lettuce, tomato, pickles, and signature house burger sauce on a toasted brioche bun." },
{ id: "burg_2", category: "Burgers", name: "Buttermilk Fried Chicken Burger", price: FLAT_PRICE, desc: "Crispy fried chicken breast, creamy slaw, pickles, and spicy chipotle mayo." },
{ id: "burg_3", category: "Burgers", name: "Smoky BBQ Bacon Burger", price: FLAT_PRICE, desc: "Beef patty, crispy bacon, cheddar, crispy onion rings, and smoky barbecue sauce." },
{ id: "burg_4", category: "Burgers", name: "Smashed Avocado & Veggie Burger", price: FLAT_PRICE, desc: "Plant-based patty or grilled halloumi cheese, smashed avocado, rocket, tomato, and garlic aioli." },
{ id: "pie_1", category: "Pies", name: "Chunky Steak & Mushroom Pie", price: FLAT_PRICE, desc: "Slow-cooked beef chunks in a rich gravy with button mushrooms, encased in a flaky puff pastry." },
{ id: "pie_2", category: "Pies", name: "Classic Mince & Cheese Pie", price: FLAT_PRICE, desc: "Seasoned lean minced beef with a thick layer of melted cheddar or mozzarella." },
{ id: "pie_3", category: "Pies", name: "Creamy Chicken & Leek Pie", price: FLAT_PRICE, desc: "Tender chicken breast pieces cooked in a creamy white wine and leek sauce." },
{ id: "pie_4", category: "Pies", name: "Roasted Vegetable & Feta Pie", price: FLAT_PRICE, desc: "Seasonal roasted Mediterranean vegetables with crumbled feta cheese in a shortcrust pastry." },
{ id: "past_1", category: "Pasta Specials", name: "Chicken & Mushroom Fettuccine", price: FLAT_PRICE, desc: "Tender chicken strips cooked with mushrooms in cream sauce." },
{ id: "past_2", category: "Pasta Specials", name: "Basil Pesto & Halloumi Fusilli", price: FLAT_PRICE, desc: "Fusilli pasta tossed with fresh basil pesto paste and finished with seared halloumi slices." },
{ id: "past_3", category: "Pasta Specials", name: "Chilli Garlic Prawn Linguine", price: FLAT_PRICE, desc: "Linguine noodles pan fried with succulent prawns, fresh garlic oil and crisp red chillies." },
{ id: "past_4", category: "Pasta Specials", name: "Roasted Vegetable & Ricotta Cannelloni", price: FLAT_PRICE, desc: "Baked tube pasta filled with mixed garden roasted vegetables topped with soft ricotta." },
{ id: "ext_1", category: "Sides, Meals & Extras", name: "Side of Crispy Bacon", price: FLAT_PRICE, desc: "Extra crisp premium side selection pork bacon rashers." },
{ id: "ext_2", category: "Sides, Meals & Extras", name: "Side of Hot Chips", price: FLAT_PRICE, desc: "Golden straight cut potato fires seasoned with marine salt." },
{ id: "ext_3", category: "Sides, Meals & Extras", name: "Traditional Fish & Chips", price: FLAT_PRICE, desc: "Crisp battered fish loin served alongside hot potato fries." },
{ id: "ext_4", category: "Sides, Meals & Extras", name: "Flame Seared Sirloin Steak", price: FLAT_PRICE, desc: "Prime quality grilled steak cut served with house juices." },
{ id: "ext_5", category: "Sides, Meals & Extras", name: "Chicken Pesto Panini", price: FLAT_PRICE, desc: "Toasted pan bread filled with roasted chicken medallions and sweet basil sauce." },
{ id: "bev_1", category: "Cold Beverages", name: "Assorted Squeezed Juices", price: FLAT_PRICE, desc: "Selection of refreshing, pure orchard cold pressed fruit juices." },
{ id: "bev_2", category: "Cold Beverages", name: "Classic Gourmet Thick Milkshakes", price: FLAT_PRICE, desc: "Rich premium whipped ice cream milkshake served in old school flavours." },
{ id: "bev_3", category: "Cold Beverages", name: "Chilled Soft Drinks", price: FLAT_PRICE, desc: "Your selection of ice cold canned carbonated refreshments." }
];



let currentSelectedId = null;
function renderWireframeMenu() {
const targetContainer = document.getElementById("menuContainer");
targetContainer.innerHTML = ""; // Clear existing elements before render loops
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
headerTitle.textContent = catName;
block.appendChild(headerTitle);
const grid = document.createElement("div");
grid.className = "grid-menu";
const items = menuItems.filter(item => item.category === catName);
items.forEach(item => {
const itemRow = document.createElement("div");
itemRow.className = "menu-row-item";
itemRow.id = row_${item.id};
itemRow.onclick = () => selectItem(item.id);
itemRow.innerHTML = <div class="item-checkbox-wrapper"> <input type="radio" name="menuSelection" id="chk_${item.id}" value="${item.id}" onclick="event.stopPropagation(); selectItem('${item.id}');"> </div> <div class="item-details"> <div class="item-name-row"> <span>${item.name}</span> <span class="item-price-tag">$${item.price.toFixed(2)}</span> </div> <div class="item-desc">${item.desc}</div> </div>;
grid.appendChild(itemRow);
});
block.appendChild(grid);
targetContainer.appendChild(block);
});
}
function selectItem(itemId) {
const clearRows = document.querySelectorAll(".menu-row-item");
clearRows.forEach(row => row.classList.remove("selected"));
currentSelectedId = itemId;
const selectedObject = menuItems.find(i => i.id === itemId);
document.getElementById(chk_${itemId}).checked = true;
document.getElementById(row_${itemId}).classList.add("selected");
document.getElementById("previewName").textContent = selectedObject.name;
document.getElementById("previewPrice").textContent = $${selectedObject.price.toFixed(2)};
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
if (!currentSelectedId) {
triggerError("No Selection: Please select a menu item by checking one of the options.");
return;
}
const activeProduct = menuItems.find(item => item.id === currentSelectedId);
if (isNaN(cashValue) || cashValue < 0) {
triggerError("Invalid Payment: Please input a valid currency total amount paid.");
return;
}
if (cashValue < activeProduct.price) {
triggerError(Insufficient Funds: '${activeProduct.name}' costs $${activeProduct.price.toFixed(2)}. You are short by $${(activeProduct.price - cashValue).toFixed(2)}.);
return;
}
let balanceChange = cashValue - activeProduct.price;
document.getElementById("rcptName").textContent = customerName;
document.getElementById("rcptItem").textContent = activeProduct.name;
document.getElementById("rcptItemCost").textContent = $${activeProduct.price.toFixed(2)};
document.getElementById("rcptTotal").textContent = $${activeProduct.price.toFixed(2)};
document.getElementById("rcptCash").textContent = $${cashValue.toFixed(2)};
document.getElementById("rcptChange").textContent = $${balanceChange.toFixed(2)};
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
currentSelectedId = null;
document.getElementById("previewName").textContent = "None Selected";
document.getElementById("previewPrice").textContent = "$0.00";
const clearRows = document.querySelectorAll(".menu-row-item");
clearRows.forEach(row => row.classList.remove("selected"));
const checkBoxes = document.querySelectorAll('input[type="radio"]');
checkBoxes.forEach(box => box.checked = false);
document.getElementById("errorAlert").style.display = "none";
document.getElementById("receiptContainer").style.display = "none";
window.scrollTo({ top: 0, behavior: 'smooth' });
}
window.onload = renderWireframeMenu;









