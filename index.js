let cards = document.getElementsByClassName("card");
let btn = document.getElementsByClassName("card-modal-form");
let Number_element = document.getElementsByClassName("card");
let totalItemBtn = document.querySelector(".total-items-badge");
let totalAmountBtn = document.querySelector(".cart-total-amount");
let CardTitle = document.getElementsByClassName("card-title");
let totalItemCart = document.getElementById("total_items");
var itemArray = [];
var counter = 0;
var price = 0;
var processPrice = 0;

// addtion function
function addtion(ele){
    counter++;
    price = +document.getElementById(`MainPrice_${ele}`).textContent;
    processPrice += price;
    itemArray.push(CardTitle.item(--ele).textContent);
};
//delete function
function del(ele){
    counter--;
    price = +document.getElementById(`MainPrice_${ele}`).textContent;
    counter === 0?processPrice = 0:processPrice -= price;
    itemArray.pop(CardTitle.item(--ele).textContent);
}

for(let i = 1 ; i <= Number_element.length; i++){
    //add to cart functionality
    document.getElementById(`card_btn_${i}`).onclick = function(){
        addtion(i);
        totalItemBtn.innerHTML = counter;
        totalItemCart.value = counter;
        totalAmountBtn.innerHTML = `$${processPrice.toFixed(2)}`;
        document.querySelector("#total_amount").innerHTML = `$${processPrice.toFixed(2)}`;
        document.querySelector("#name_item").innerHTML = `${itemArray} `; 
        //+ button functionality 
        document.getElementById("add_btn").onclick = function(){
                console.log(i);
                addtion(i);
                totalItemBtn.innerHTML = counter;
                totalItemCart.value = counter;
                totalAmountBtn.innerHTML = `$${processPrice.toFixed(2)}`;
                document.querySelector("#total_amount").innerHTML = `$${processPrice.toFixed(2)}`;
                document.querySelector("#name_item").innerHTML = `${itemArray} `;   
        };
        //- button functionality
        document.getElementById("del_btn").onclick = function(){
                if(totalItemCart.value>0){
                    console.log(i);
                    del(i);
                    totalItemBtn.innerHTML = counter;
                    totalItemCart.value = counter;
                    totalAmountBtn.innerHTML = `$${processPrice.toFixed(2)}`;
                    document.querySelector("#total_amount").innerHTML = `$${processPrice.toFixed(2)}`;
                    document.querySelector("#name_item").innerHTML = `${itemArray}`;
                };
        };
    };
}

