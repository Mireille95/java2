jQuery(document).ready(function() {
jQuery("h1").click(function() {
    alert("This is a header.");
    alert("I told you, THIS IS A HEADER!");
    });
  
    jQuery("p").click(function() {
      alert("This is a paragraph.");
    });
  
    jQuery("img").click(function() {
      alert("This is an image.");
    });
  });



// 

// $(document).ready(function() {
//   $("button#green").click(function() {
//     $("body").addClass("green-background");
//   });

//   $("button#yellow").click(function() {
//     $("body").addClass("yellow-background");
//   });

//   $("button#red").click(function() {
//     $("body").addClass("red-background");
//   });
// });
// $(document).ready(function() {
//   $("button#green").click(function() {
//     $("body").removeClass();
//     $("body").addClass("green-background");
//   });

//   $("button#yellow").click(function() {
//     $("body").removeClass();
//     $("body").addClass("yellow-background");
//   });

//   $("button#red").click(function() {
//     $("body").removeClass();
//     $("body").addClass("red-background");
//   });
// });

// $(document).ready(function() {
//   $("button#green").click(function() {
//     $("body").removeClass();
//     $("body").addClass("green-background");
//   });

//   $("button#yellow").click(function() {
//     $("body").removeClass();
//     $("body").addClass("yellow-background");
//   });

//   $("button#red").click(function() {
//     $("body").removeClass();
//     $("body").addClass("red-background");
//   });
//   // $("button#green").click(function() {
//   //   $("body").css("background-color", "green");
//   // });
// });



 
// $(document).ready(function() {
//   $("button#hello").click(function() {
//     $("ul#user").prepend("<Hello!>");
//     $("ul#webpage").prepend("<Why hello there!>");
//     $('li').click(function() {
//       alert('hi');
//     });
//     $("ul#user").children("li").first().click(function() {
//       alert('hi');
//     });
//     $("ul#webpage").children("li").first().click(function() {
//       alert('hi');
//     });
//   });


//   $("button#goodbye").click(function() {
//     $("ul#user").prepend("<li>Goodbye!</li>");
//     $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
//   });

//   $("button#stop").click(function() {
//     $("ul#user").prepend("<li>Stop copying me!</li>");
//     $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
//   });

  
// });
// var globalString = "This is a global variable";

//       function sampleFunction() {
//         alert(globalString);
//         globalString = "This is a global variable update!!";
//         alert(globalString);
//       }

//       alert(globalString);
//       sampleFunction();
//       alert(globalString);
  
//   function sampleFunction() {
//         var globalString = "This is a global variable";
//         alert(globalString);
//         globalString = "This is a global variable update!!";
//         alert(globalString);
//       }

//       alert(globalString);
//    $(document).ready(function() {

//         $("div#click-one").click(function(event) {
//           var whatToSay = "Hello!";
//           alert(whatToSay);
//         });

//         $("div#click-two").click(function(event) {
//           alert(whatToSay);
//         });
//       });

// $(document).ready(function() {
//   $("#blanks form").submit(function(event) {
//     var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

//     blanks.forEach(function(blank) {
//       var userInput = $("input#" + blank).val();
//       $("." + blank).text(userInput);
//     });

//     $("#story").show();

//     event.preventDefault();
//   });
// });

var add = function(number1, number2) {
  return number1 + number2;
  };
  var subtract = function(number1, number2) {
  return number1 - number2;
  };
  var multiply = function(number1, number2) {
  return number1 * number2;
  };
  var divide = function(number1, number2) {
  return number1 / number2;
  };
  
  $(document).ready(function() {
  $("form#add").submit(function(event) {
  event.preventDefault();
  var number1 = parseInt($("#add1").val());
  var number2 = parseInt($("#add2").val());
  var result = add(number1, number2);
  $("#output").text(result);
  });
  });
// var beverage = $("#beverage").val();
// var flavor = $("input:radio[name=flavor]:checked").val();
// var dob = $("#born").val();
// var favoriteColor = $("#color").val();
 