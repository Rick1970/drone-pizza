var sizeTotal;
var toppingTotal;

function Pizza (size, toppings){
  this.size = size;
  this.toppings = toppings;
}

Pizza.prototype.currentOrder = function() {
  return this.size + " " + this.toppings;
};

var sizeTotal;
var toppingTotal;
$(document).ready(function(){
  $("form#place-order").submit(function(event){
    event.preventDefault();
    var inputtedSize = $("#input1").val();
    var inputtedTopping = $("#input2").val();
    alert(inputtedSize);
    alert(inputtedTopping);
    if (inputtedSize === "Small"){
      sizeTotal = 8.00;
    }
    else if (inputtedSize === "Medium"){
      sizeTotal = 10.00;
    }
    else if (inputtedSize === "Large") {
      sizeTotal = 12.00;
    }
    if (inputtedTopping === "Peperoni"){
      toppingTotal = 1.50;
    }
    else if (inputtedTopping === "Mushrooms"){
      toppingTotal = 1.50;
    }
    $("ul#finalprice").append("<li>" + "$" + sizeTotal + toppingTotal +  "</li>");
  });
});



$(document).ready(function(){
  $("form#place-order").submit(function(event){
    event.preventDefault();
    var inputtedSize = $("#input1").val();
    var inputtedTopping = $("#input2").val();
    var newOrder = new Pizza(inputtedSize, inputtedTopping);
    if (inputtedSize === "small"){
      sizeTotal = 8.00;
      alert(sizeTotal);
    }

    $("ul#final").append("<li>" + newOrder.currentOrder() + "</li>");
    // $("ul#finalprice").append("<li>" + "$" + sizeTotal + toppingTotal "</li>");

  });
});
