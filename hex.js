
var counter = 0;

$(document).ready(function(){
  $(".city").click(function(e){
    e.preventDefault();
    counter++;
    console.log("click " + counter);
  })

})
