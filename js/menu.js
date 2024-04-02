let carts = document.querySelectorAll('.add-cart');

let food =[
    {
        name: "Classic Grill", 
        tag:"classicgrill",
        price: 13.00,
        inCart:0
    },
    {
        name: "Cheese All Over Me", 
        tag:"cheesealloverme",
        price: 23.00,
        inCart:0
    },
    {
        name: "Double Chick", 
        tag:"doublechick",
        price: 20.00,
        inCart:0
    },
    {
        name: "Classic Cheese", 
        tag:"classiccheese",
        price: 17.00,
        inCart:0
    },
    {
        name: "Beefy Boi", 
        tag:"beefyboi",
        price: 23.00,
        inCart:0
    },
    {
        name:"Texas Cowboy", 
        tag:"texascowboy",
        price: 19.00,
        inCart:0
    },
    {
        name: "Salmon Fillet", 
        tag:"salmonfillet",
        price: 20.00,
        inCart:0
    },
    {
        name: "Where's Nemo", 
        tag:"wheresnemo",
        price: 15.00,
        inCart:0
    },
    {
        name: "Fish & Chip", 
        tag:"fishnchip",
        price: 13.00,
        inCart:0
    },
    {
        name: "Eggplant Burger", 
        tag:"eggplantburger",
        price: 15.00,
        inCart:0
    },
    {
        name:"Creamy Patty", 
        tag:"creamypatty",
        price: 20.00,
        inCart:0
    },
    {
     name: "Sambal Salad", 
     tag:"sambalsalad",
     price: 13.00,
     inCart:0
    }
];

for(let i=0; i<carts.length; i++){
    
    carts[i].addEventListener('click', () => {
         
        cartNumbers(food[i]); 
        totalCost(food[i]);
    });

    
}


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


function setItems(food){
    let cartItems = localStorage.getItem('foodInCart');
    cartItems =JSON.parse(cartItems);
    
  if(cartItems != null){

    if(cartItems[food.tag] ==undefined) 
    {
        cartItems={
            ...cartItems,
            [food.tag]:food
        }
    }
    cartItems[food.tag].inCart += 1;    
  }
  else{
    food.inCart = 1;
 
     cartItems = {
         [food.tag]: food
     }
  }
     
     localStorage.setItem("foodInCart", JSON.stringify(cartItems));
 }


 function totalCost(unit){ 

    let cartCost = localStorage.getItem('totalCost');

    console.log("cost =" , cartCost);    
    console.log(typeof cartCost);

    if(cartCost != null){ 
        cartCost =parseInt(cartCost); 
        localStorage.setItem("totalCost", cartCost + unit.price);
 
    }else{
        localStorage.setItem("totalCost", unit.price); 
    }
 }
 
 onLoadCartNumbers();