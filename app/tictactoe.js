"use strict";

$(document).ready(function () {
    var count = 0;
    var board = {};

  $('#board').delegate('.box', 'click', function(e){
    var text = $(e.target).html();
    var id = e.target.id;
    
    if (text == ""){
      if (count %2 === 0){
        $(e.target).html("X");
        board[id] = "X";
        $('#message').html("Your turn O");
        score();
      } else {
        $(e.target).html("O");
        board[id] = "O";
        $('#message').html("Your turn X");
        score();
      }
      count += 1;
      
      if (count === 9){
        $('#message').html("Game Over!");
      score();
      } 
    }
    console.log(board);
  });

  $('#reset').click(function(e){
    board = {};
    $('.box').empty();
    $('#message').html("Ready to go again!");
    $('#winner').empty();
    count =0;
  });

  function score(){
    console.log("in the score");
    if ((board.box1 === board.box2 && board.box2 === board.box3)||
        (board.box1 === board.box4 && board.box4 === board.box7)||
        (board.box1 === board.box5 && board.box5 === board.box9)){
      $('#winner').html(board.box1);
      } else if 
       ((board.box5 === board.box3 && board.box3 === board.box7)||
        (board.box5 === board.box2 && board.box2 === board.box8)||
        (board.box5 === board.box4 && board.box4 === board.box6)){
      $('#winner').html(board.box5);
      } else if 
       ((board.box9 === board.box6 && board.box6 === board.box3)||
        (board.box9 === board.box8 && board.box8 === board.box7)){
      $('#winner').html(board.box9);
      } else {
      // $('#winner').html("Cat Game - Try again");
    }
  }
});

