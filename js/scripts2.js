var sizePrice;
var toppingPrice;
var total;

function Pizza (size, toppings){
  this.size = size;
  this.toppings = toppings;

  if (this.size === "Small"){
   sizePrice = 8.00;
  }
  else if (this.size === "Medium"){
    sizePrice = 10.00;
  }
  else if (this.size === "Large"){
    sizePrice = 12.00;
  }
  if (this.toppings === "Peperoni"){
    toppingPrice = 1.50;
  }
  else if (this.toppings === "Mushrooms"){
    toppingPrice = 1.50;
  }
  else if (this.toppings === "Peperoni"  && this.toppings === "Mushrooms"){
    toppingPrice = 3.00;
  }
}


$(document).ready(function(){
  $("form#place-order").submit(function(event){
    event.preventDefault();
    var inputSize = $("#input1").val();
    var inputTopping = $("#input2").val();
    var newOrder = new Pizza (inputSize, inputTopping);
    total = sizePrice + toppingPrice;
    $("ul#final").append("<li>" + newOrder.size + newOrder.toppings + "</li>");
    $("ul#finalprice").append("<li>" + "$" + total + "0" + "</li>");
  });
  });
