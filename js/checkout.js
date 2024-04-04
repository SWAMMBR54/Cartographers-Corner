// Pulling Arrays/Variables

for (let i = 0; i < currentCart.length; ++i) {
    checkoutData = "";
    checkoutData += "<p>" + currentCart[i] + " - ";
    for (let j = 0; i < maps.length; ++j) {
        if (currentCart[i] == maps[i][0]) {
            checkoutData += mapPrices[i][3] + "</p>";
        };
    };
    document.getElementById("checkoutInfo").insertAdjacentHTML("beforeend", checkoutData);
};

