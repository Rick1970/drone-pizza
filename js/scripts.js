function Order(size, toppings){
  this.size = "size";
  this.toppings = [];
}

function Size(small, medium, large){
  this.small = 8.00;
  this.medium = 10.00;
  this.large = 12.00;
}

function Toppings(mushroom, peperroni, hamburger){
  this.mushroom = "mushroom";
  this.peperroni = "peperroni";
  this.hamburger = "hamburger";
}

var inputtedToppings = [];


$(document).ready(function(){
  $("form#place-order").submit(function(event){
    event.preventDefault();
    var inputtedSize = $("#input1").val();
    alert(inputtedSize);


 $("button#pep").click(function(event){

  inputtedToppings.push("peperroni");
   event.preventDefault();
  alert(inputtedToppings);

  // $("button#mush").click(function(event){
  // //   var inputtedToppings = [];
  //  inputtedToppings.push("mushroom");
  //   event.preventDefault();
  //  alert(inputtedToppings);
  //
  //  $("button#hamb").click(function(event){
  //    var inputtedToppings = [];
  //   inputtedToppings.push("hamburger");
  //    event.preventDefault();
  //   alert(inputtedToppings);


  });

    $("ul#your-order").append("<li><span class='order'>" + newOrder.size + "</span></li>");
    $(".order").last().click(function(){
      $("#show-order").show();
      $("#show-order h2").text(newOrder.size);
      $(".new-size").text(newOrder.size);
      $(".first-top").text(newOrder.toppings);

    });
    $("input#new-size").val("");
    $("input#first-top").val("");

  });
});
