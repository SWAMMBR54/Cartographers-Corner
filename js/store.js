// Cart Counting Variable Setup
let cartInv = 0;

// Store setup
for (let i = 0; i < maps.length; i++) {
    let storeItem = ""
    storeItem += "<table class='map' id='" + maps[i][0] + "'>";
    storeItem += "<tr><td><img src='images/placeholderImage.png' alt='' class='mapImage'></td></tr>";
    storeItem += "<tr><th>" + maps[i][1] + "</th></tr>";
    storeItem += "<tr><td>" + maps[i][2] + "</td></tr>";
    storeItem += "<tr><td>" + maps[i][3] + "</td></tr>";
    storeItem += "</table>";

    document.getElementById("popMapsContainer").insertAdjacentHTML("beforeend", storeItem);
};



for (let i = 0; i < maps.length; i++) {
    document.getElementsByTagName("table")[i].addEventListener("click", function() {
        let confirmation = confirm("Add " + maps[i][0] + " Map - " + maps[i][3] + " to cart?");
        (confirmation) ? checkoutPrice += maps[i][3] : checkoutPrice += 0;
        // (confirmation) ? currentCart.push(maps[i][1]) : currentCart;
        (confirmation) ? cartInv += 1 : cartInv;

        document.getElementById("cartPrice").innerHTML = "$" + checkoutPrice.toFixed(2);
        document.getElementById("cartInventory").innerHTML = cartInv;
    });
}