var p1_name=localStorage.getItem("player1_name");
var p2_name=localStorage.getItem("player2_name");
player1_score = 0;
 player2_score = 0;
 document.getElementById("Player1").innerHTML = p1_name + " : ";
  document.getElementById("Player2").innerHTML = p2_name + " : "; 
  document.getElementById("Player1score").innerHTML = player1_score ;
   document.getElementById("Player2score").innerHTML = player2_score ;
    document.getElementById("Turno_para_preguntar").innerHTML = "Turno para preguntar - " + p1_name ;
     document.getElementById("Turno_para_responder").innerHTML = "Turno para responder - " + p2_name ;
     function send(){
        number1=document.getElementById(number1).value
        number2=document.getElementById(number2).value
        actual_answer=parseInt(number1)*parseInt(number2)
        question_number = "<h4>" + number1 + "X"+ number2 +"</h4>";
        input_box = "<br>Answer: <input type='text' id='input_check_box'>";
        check button = "<br><br><button class='btn btn-info" onclick ="check()'>Check</button>";
        row question_number + input_box + check_button;
     }