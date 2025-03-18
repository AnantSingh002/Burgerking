function placeOrder() {
    const selectedItems = document.querySelectorAll('input[type="checkbox"]:checked');
    if (selectedItems.length === 0) {
        alert("Please select at least one item.");
        return;
    }

    document.getElementById("foodDisplay").innerHTML = "Preparing your order...";
    document.getElementById("foodDisplay").style.display = "block";
    
    const orderId = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("orderNumber").innerText = "Order #" + orderId;
    document.getElementById("orderNumber").style.display = "block";
    
    const delay = Math.random() * 4000 + 2000;
    setTimeout(() => {
        let foodHTML = "";
        selectedItems.forEach(item => {
            foodHTML += `<img src="${item.value}" alt="Food" width="100">`;
        });
        document.getElementById("foodDisplay").innerHTML = foodHTML;
    }, delay);
}