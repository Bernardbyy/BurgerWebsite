

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



if(localStorage.getItem('randomST') == null){
    localStorage.setItem('randomST',generateRandomString(6));
    randnum = localStorage.getItem("randomST")
    document.getElementById("rand").innerHTML = "#" + randnum;
}
else
{
    randnum = localStorage.getItem("randomST")
    document.getElementById("rand").innerHTML ="#" + randnum;
}

 function generateRandomString(n) {
    let randomString = "";
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (let i = 0; i < n; i++) {
        randomString += characters.charAt(
        Math.floor(Math.random() * characters.length)
        );
        }
        return randomString;
}

if(localStorage.getItem('estimateTime')==null){
    localStorage.setItem('estimateTime', deliveryTime());
    estimate = localStorage.getItem("estimateTime")
    document.getElementById("time").innerHTML = estimate;
}else{
    estimate = localStorage.getItem("estimateTime")
    document.getElementById("time").innerHTML = estimate;
}

function deliveryTime(){
    let dTime = "";
    dTime = new Date();
    dTime.setMinutes(dTime.getMinutes()+15);
    return dTime.getDate()+"/"+ (dTime.getMonth()+1) + "/" + dTime.getFullYear() + " " + dTime.getHours() + ":" + dTime.getMinutes();
}

// declare new variable in local storage
foodItems = localStorage.getItem("foodInCart");
if( localStorage.getItem("foodInCart") !== null ){
    localStorage.setItem('historyItem', foodItems);
    localStorage.removeItem('foodInCart');
}
   
customer = localStorage.getItem("personalInfo");
if( localStorage.getItem("personalInfo") !== null ){
    localStorage.setItem('historyInfo', customer);
    localStorage.removeItem('personalInfo');
}


costTotal = localStorage.getItem("totalCost");
if(localStorage.getItem("totalCost") != null){
    localStorage.setItem('historyTotal', costTotal);
    localStorage.removeItem('totalCost');
    localStorage.removeItem('cartNumbers');
}
    
    //   if (foodItems && itemData) {
    function displayDetails(){
console.log("halo");
        foodItems = localStorage.getItem("historyItem");
        foodItems = JSON.parse(foodItems);

        customer = localStorage.getItem('historyInfo')
        customer = JSON.parse(customer);

        costTotal = localStorage.getItem('historyTotal')
        costTotal = JSON.parse(costTotal);

        
        let itemData = document.querySelector(".list"); 

        itemData.innerHTML = "";
        Object.values(foodItems).map((item) => {
        itemData.innerHTML += `
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
          
          itemData.innerHTML += `
              <div class="cartTotalContainer">
                  <div class="cartTotalTitle">
                      Total 
                  </div>
                  <div class="cartTotal" id="cartTotal">
                      RM${costTotal}.00
                  </div>
              </div>
              `;

    let delivery = document.querySelector(".info");
    delivery.innerHTML += `
    <div class="deliveryDetails">
    Name: ${customer.fName} ${customer.lName}
    <br />
    Email: ${customer.email}
    <br />
    Phone: ${customer.phone}
    <br />
    Address: ${customer.addr}
    <br />
    Postcode: ${customer.pcode} 
    </div>
</div>
`;
      }
  
  displayDetails();