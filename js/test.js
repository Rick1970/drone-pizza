var sizePrice;
var toppingPrice;



var sizePrice;
var toppingPrice;



function Pizza (size, toppings){
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.calculate = function(){
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
    return sizePrice + toppingPrice;
  };





$(document).ready(function(){
  $("form#place-order").submit(function(event){
    $("#hide").show();

    var inputSize = $("#input1").val();
    var inputTopping = $("#input2").val();
    var newOrder = new Pizza (inputSize, inputTopping);
    var total = newOrder.calculate();
    $("ul#final").append("<li>" + newOrder.size + newOrder.toppings + "</li>");
    $("ul#finalprice").append("<li>" + "$" + total + "0" + "</li>");




    $("form#place-order2").click(function(event){
      inputSize = $("#input1").val();
      inputTopping = $("#input2").val();
      var newOrder2 = new Pizza (inputSize, inputTopping);
      var total2 = newOrder2.calculate();
      var multiTotal = total + total2;
      $("ul#mult").append("<li>" + "$" + multiTotal + "</li>");
      $("ul#mult =:last-child").empty();

    });

    });

  });


 });
