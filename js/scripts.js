$(document).ready(function() {
    $("#formOne").submit(function(event) {
      //$(".person1").prepend("greatness");
      let person1 = $("#person1").val().toUpperCase();
      let address = $("#address").val().toUpperCase();
      

      $(".person1").text(person1);
      $(".address").text(address);
     
  
      $("#postcard").toggle();
      event.preventDefault();
    });
  });