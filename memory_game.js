

function smallGame (){
  $("#game_squares").html("");  //clears board
  $('#timer').removeClass("hide");
  var count = 0;
  var time = 0;
  var counter=setInterval(timer, 1000);

  $("button").addClass("hide");

  function timer(){
    time +=1;
    if (count === 5){
     return time;
    }
    $("#timer").html("Timer: " + time + " secs");
  }

  var letterArray = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E"];
  var shuffledArray = _.shuffle(letterArray);
  console.log(shuffledArray);
  for (var i = 0; i < shuffledArray.length; i += 1){
    var divElement = $("<div/>");
    divElement.attr('class', 'hidden');
    divElement.attr('data-id', i);
    var square = shuffledArray[i];
    divElement.append(square);
    $("#game_squares").append(divElement);
  }
  $(".hidden").mouseover(function(){
    $(this).addClass("hover");
  });

  $(".hidden").mouseout(function(){
    $(this).removeClass("hover");
  });

  $(".hidden").on('click', function(){
    if($(".revealed").length === 0) {
      $(this).addClass("revealed");
    } else {
      if($(".revealed").html() === $(this).html()){
        $(this).addClass("matched");
        $(this).removeClass("hidden");
        $(".revealed").addClass("matched");
        $(".revealed").unbind('click mouseover');
        $(".revealed").unbind('click mouseover');
        $(".revealed").removeClass("hidden revealed");
        count += 1;
        if(count === 5) {
          $("#win").removeClass("hide");
          $("button").removeClass("hide");
        }
      } else {
        $(this).addClass("revealed");
        setTimeout(function(){$(".revealed").removeClass("revealed")}, 800);
      }
    }
  });
}

$(document).ready(function(){
  var letterArray = [];
  $("#easy_btn").on('click', smallGame);
});














