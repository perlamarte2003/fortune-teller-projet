 $("button").click(function(){
   var username= $('.name').val();
   var hours= $('.sleep').val();
   var edad= $('.old').val();
   var num1 = 8;
   var num2= num1 * 8;
   
   
   console.log(num2);
   //console.log(hours);
   //console.log(love);
   
   var fortune = "Hello " + username + ".";
    $("p").text(fortune);
});

