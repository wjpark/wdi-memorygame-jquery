

function smallGame (){
  var square1;
  var square2;
  var letterArray = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E"];
  var shuffledArray = _.shuffle(letterArray);
  console.log(shuffledArray);
  for (var i = 0; i < shuffledArray.length; i += 1){
    var divElement = $("<div/>");
    divElement.attr('class', 'hidden square');
    divElement.attr('data-id', i);
    var square = shuffledArray[i];
    divElement.append(square);
    $("#game_squares").append(divElement);
  }
  $(".square").mouseover(function(){
    $(this).addClass("hover");
  });

  $(".square").mouseout(function(){
    $(this).removeClass("hover");
  });

  $(".square").on('click', function(){
    $(this).removeClass("hidden");
    square1 = 3;
    console.log(square1);

  });
}

function matchPair (square1, square2){
  if(square1.innerHTML === square2.innerHTML){
    square1.removeClass("hidden");
    square2.removeClass("hidden");
  } else {
    square1.addClass("hidden");
    square2.addClass("hidden");
  }
}



$(document).ready(function(){
  var letterArray = [];
  $("#easy_btn").on('click', smallGame);
});














