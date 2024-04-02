function onLoadCartNumbers(){ 

    let foodNumbers = localStorage.getItem('cartNumbers');

    if(foodNumbers){ 
        document.querySelector('.cart span').textContent = foodNumbers;
    }
}

function cartNumbers(food){

    let foodNumbers = localStorage.getItem('cartNumbers');
                     
    foodNumbers = parseInt(foodNumbers); 
                    

    if(foodNumbers){ 
        localStorage.setItem('cartNumbers', foodNumbers +1);
        document.querySelector('.cart span').textContent =foodNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
        document.querySelector('.cart span').textContent = 1;
    }

    setItems(food);    
}



var coll = document.getElementsByClassName("collapsible");

var i;
var personalInfo = {};
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}

function inputOnChange(e) {

    personalInfo[e.target.id] = e.target.value;

    console.log(personalInfo)

}

function writeToFile() {
    let objString = JSON.stringify(personalInfo);
    localStorage.setItem('personalInfo', objString);
    localStorage.removeItem('randomST');
    localStorage.removeItem('estimateTime');
}


function displaySummary(){
  let cartItems = localStorage.getItem("foodInCart");
  cartItems = JSON.parse(cartItems);


  let itemList = document.querySelector(".summary");
    let cartCost = localStorage.getItem("totalCost");
console.log(itemList);
    if (cartItems && itemList) {
        itemList.innerHTML = "";

        Object.values(cartItems).map((item) => {
           itemList.innerHTML += `
            <div class="itemdt" id="${item.tag}">
                <div class="item">
                <span>${item.name}</span>
                </div>

                <div class="quantity">
                <span id="${item.tag}Quantity">${item.inCart}</span>
                </div>

                <div class="total" id="${item.tag}Total">RM${
                item.price * item.inCart
            }.00</div>
            </div>
         `;
        });
        
        itemList.innerHTML += `
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
displaySummary();