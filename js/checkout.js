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

document.getElementById("submitCheckout").addEventListener("click",openCheckoutForm);
document.getElementById("checkoutForm").onload = document.getElementById("checkoutForm").style.display = "none";

function openCheckoutForm() {
    document.getElementById("submitCheckout").style.display = "none";
    document.getElementById("checkoutForm").style.display = "block";
}

document.getElementById("submitPayment").onclick = submitCheckout;

function submitCheckout() {
    fName = document.getElementById("fName").value;
    lName = document.getElementById("lName").value;
    
    try { 
        if (!(fName == "")) {
            throw "fName_empty";
        }
        if (!(lName == "")) {
            throw "lName_empty";
        }
    }catch(error) {
        checkoutError(error);
    }
}

function checkoutError(errorDef) {
    switch(errorDef){
        case "fName_empty":
            document.getElementById("errorMSG").innerHTML = "Please enter your First Name!";
            break;
        case "lName_empty":
            document.getElementById("errorMSG").innerHTML = "Please enter your Last Name!"
    }
}

function validateCheckout() {
    fName = document.getElementById("fName").value;
    inputs = document.querySelectorAll("input");
    if (inputs == "") {
        alert("Please fill out all fields")
    }
    if (typeof(fName) != "string") {
        alert("First Name must be a text string!")
    }
}