function addUser(){
    player1_name=document.getElementById("player1name").value;
    player2_name=document.getElementById("player2name").value;
    
    localStorage.setItem("player1name",player1name);
    localStorage.setItem("player2name",player2name);
    
    window.location="game_page.html";
    }

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name +" - ";
document.getElementById("player2_name").innerHTML=player2_name +" - ";

document.getElementById("player1_name").innerHTML=player1_name + " - " ;
document.getElementById("player2_name").innerHTML=player2_name +" - ";

document.getElementById("player1score").innerHTML=player1_score;
document.getElementById("player2score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn - "+ player1_name;
document.getElementById("player_answer").innerHTML="Answer turn - "+ player2_name;

function send(){
    number1=document.getElementById("number_1").value;
    number2=document.getElementById("number_2").value;
    actual_answer=parseInt(number1) * parseInt(number2);
    question_number="<h4>"+number1+"X"+number2+"</h4>"
    input_box="<br>Answer : <input type='text'id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
    }

    question_turn="Player1";
answer_turn="Player2";


function check(){
get_answer=document.getElementById("input_check_box").value
console.log(answer);


if(answer==actual_answer){

    if(answer_turn=="Player1"){
        update_player1score=player1score+1;
        document.getElementById("player1score").innerHTML=update_player1_score;    
    }
    else{
    update_player2score=player2score+1;
    document.getElementById("player2score").innerHTML=update_player2_score;
    }
}

if(question_turn=="Player1"){
question_turn="Player2"
document.getElementById("player_question").innerHTML="Question turn - "+ player2_name;
}
else{
question_turn="Player1"
document.getElementById("player_question").innerHTML="Question turn - "+ player1_name;
}


if(answer_turn=="Player1"){
answer_turn="Player2"
document.getElementById("player_answer").innerHTML="Answer turn - "+ player2_name;
}
else{
answer_turn="Player1"
document.getElementById("player_answer").innerHTML="Answer turn - "+ player1_name;
}


document.getElementById("output").innerHTML="";
}