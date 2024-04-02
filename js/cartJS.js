
function onLoadCartNumbers() {
    
    let foodNumbers = localStorage.getItem("cartNumbers");

    if (foodNumbers) {
        
        document.querySelector(".cart span").textContent = foodNumbers;
    }
} 

function cartNumbers(food) {
    let foodNumbers = localStorage.getItem("cartNumbers");
    
    foodNumbers = parseInt(foodNumbers);


    if (foodNumbers) {
        
        localStorage.setItem("cartNumbers", foodNumbers + 1);
        document.querySelector(".cart span").textContent = foodNumbers + 1;
    } else {
        localStorage.setItem("cartNumbers", 1);
        document.querySelector(".cart span").textContent = 1;
    }

    setItems(food);
}

// cart section
function displayCart() {
    let cartItems = localStorage.getItem("foodInCart");
    cartItems = JSON.parse(cartItems);

  

    let foodContainer = document.querySelector(".itemList");
    let cartCost = localStorage.getItem("totalCost");
    if (cartItems && foodContainer) {
        foodContainer.innerHTML = "";

        Object.values(cartItems).map((item) => {
            foodContainer.innerHTML += `
            <div class="itemRow" id="${item.tag}">
                <div class="item">
                <a class="delete" href="#!" onclick="deleteItem(event)">
                <ion-icon name="trash"></ion-icon></a>

                <img src="./image/${item.tag}.jpg" />
                <span>${item.name}</span>
                </div>
                <div class="price" id="${item.tag}Price">RM${
                item.price
            }.00</div>

                <div class="quantity">
                <a class="increase" href="#!" onclick="addQuantity(event)"
                    ><ion-icon name="add-circle-outline"></ion-icon
                ></a>
                <span id="${item.tag}Quantity">${item.inCart}</span>
                <a class="decrease" href="#!" onclick="minusQuantity(event)"
                    ><ion-icon name="remove-circle-outline"></ion-icon
                ></a>
                </div>

                <div class="total" id="${item.tag}Total">RM${
                item.price * item.inCart
            }.00</div>
            </div>
         `;
        });
        foodContainer.innerHTML += `
            <div class="cartTotalContainer">
                <h4 class="cartTotalTitle">
                    Total 
                </h4>
                <h4 class="cartTotal" id="cartTotal">
                    RM${cartCost}.00
                </h4>
            </div>
            `;
    }
}

function addQuantity(event) {
    let foodInCart = JSON.parse(localStorage.getItem("foodInCart"));
    let totalCost = JSON.parse(localStorage.getItem("totalCost"));
    const thisItem = event.currentTarget.parentNode.parentNode.id;
    foodInCart[thisItem].inCart++;
    document.getElementById(
        thisItem + "Quantity"
    ).innerHTML = `${foodInCart[thisItem].inCart}`;
    document.getElementById(thisItem + "Total").innerHTML = `RM${
        foodInCart[thisItem].inCart * foodInCart[thisItem].price
    }.00`;
    
    totalCost += foodInCart[thisItem].price
    document.getElementById("cartTotal").innerHTML = `RM${
        totalCost
    }.00`;
    console.log(totalCost)
    localStorage.setItem("foodInCart", JSON.stringify(foodInCart));
    localStorage.setItem("totalCost", JSON.stringify(totalCost));

    let foodNumbers = localStorage.getItem('cartNumbers');

    foodNumbers = parseInt(foodNumbers); 

    if(foodNumbers){
        localStorage.setItem('cartNumbers', foodNumbers +1);
        document.querySelector('.cart span').textContent =foodNumbers + 1;}
    
}

function minusQuantity(event) {
    let foodInCart = JSON.parse(localStorage.getItem("foodInCart"));
    let totalCost = JSON.parse(localStorage.getItem("totalCost"));
    const thisItem = event.currentTarget.parentNode.parentNode.id;
    foodInCart[thisItem].inCart--;
    totalCost -= foodInCart[thisItem].price
        document.getElementById("cartTotal").innerHTML = `RM${
            totalCost
        }.00`;
    if (foodInCart[thisItem].inCart <= 0) {
        delete foodInCart[thisItem];
        document.getElementById(thisItem).remove();
    } else {
        document.getElementById(
            thisItem + "Quantity"
        ).innerHTML = `${foodInCart[thisItem].inCart}`;
        document.getElementById(thisItem + "Total").innerHTML = `RM${
            foodInCart[thisItem].inCart * foodInCart[thisItem].price
        }.00`;
    }
    localStorage.setItem("foodInCart", JSON.stringify(foodInCart));
    localStorage.setItem("totalCost", JSON.stringify(totalCost));

    let foodNumbers = localStorage.getItem('cartNumbers');

    foodNumbers = parseInt(foodNumbers); 


    if(foodNumbers){ 
        localStorage.setItem('cartNumbers', foodNumbers -1);
        document.querySelector('.cart span').textContent =foodNumbers - 1;
    }


    
}

function deleteItem(event){
    let foodInCart = JSON.parse(localStorage.getItem("foodInCart"));
    let totalCost = JSON.parse(localStorage.getItem("totalCost"));
    const thisItem = event.currentTarget.parentNode.parentNode.id;
    foodInCart[thisItem].inCart--;
    totalCost -= foodInCart[thisItem].price
        document.getElementById("cartTotal").innerHTML = `RM${
            totalCost
        }.00`;
        delete foodInCart[thisItem];
        document.getElementById(thisItem).remove();

        localStorage.setItem("foodInCart", JSON.stringify(foodInCart));
    localStorage.setItem("totalCost", JSON.stringify(totalCost));

    let foodNumbers = localStorage.getItem('cartNumbers');

    foodNumbers = parseInt(foodNumbers); 


    if(foodNumbers){ 
        localStorage.setItem('cartNumbers', foodNumbers -1);
        document.querySelector('.cart span').textContent =foodNumbers - 1;}
  
    }

displayCart();

