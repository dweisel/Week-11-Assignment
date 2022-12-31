
//declare three variables "turn", "boxes", "X_or_0"
var turn = document.getElementById("turn"),
boxes = document.querySelectorAll("#main div"), X_or_O = 0;

//function for selecting the three winner boxes, adds the word "win" to the element in the class list which triggers styling
function selectWinnerBoxes(b1, b2, b3) {
b1.classList.add("win");
b2.classList.add("win");
b3.classList.add("win");
turn.innerHTML = b1.innerHTML + ' is a winner!';
turn.style.fontSize = "40px";
}

//biggest function of the game. Declares all 9 boxes as variables and then triggers a winner. For example, if box 1 is not empty
// and is equal to boxes 2 and 3, there is a winner. The last part of this function is if all the boxes are not empty, and no winner
//criteria has been met, there is a draw.
function getWinner() {
  var box1 = document.getElementById("box1"),
    box2 = document.getElementById("box2"),
    box3 = document.getElementById("box3"),
    box4 = document.getElementById("box4"),
    box5 = document.getElementById("box5"),
    box6 = document.getElementById("box6"),
    box7 = document.getElementById("box7"),
    box8 = document.getElementById("box8"),
    box9 = document.getElementById("box9");

  if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
    selectWinnerBoxes(box1, box2, box3);

  if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
    selectWinnerBoxes(box4, box5, box6);

  if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
    selectWinnerBoxes(box7, box8, box9);

  if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
    selectWinnerBoxes(box1, box4, box7);

  if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
    selectWinnerBoxes(box2, box5, box8);

  if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
    selectWinnerBoxes(box3, box6, box9);

  if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
    selectWinnerBoxes(box1, box5, box9);

  if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
    selectWinnerBoxes(box3, box5, box7);

    else if (box1.innerHTML !=='' && box2.innerHTML !=='' && box3.innerHTML !=='' && box4.innerHTML !== '' && box5.innerHTML !== '' 
    && box6.innerHTML !=='' && box7.innerHTML !== '' && box8.innerHTML !== '') {
      turn.innerHTML = 'Draw!'
    }
    }

//this is the for else loop for the onclick function. If the X_or_O variable is even (it starts at 0),
//then it puts an X in the box and changes the text to "O Turn Now". It also enumerates X_or_O, which triggers the
//else part of the function, which is if X_or_O is odd, put an O in the box and display "X Turn Now" and enumerate
// X_or_O.   
for (var i = 0; i < boxes.length; i++) {
boxes[i].onclick = function () {
  if (this.innerHTML !== "X" && this.innerHTML !== "O") {
    if (X_or_O % 2 === 0) {
      console.log(X_or_O);
      this.innerHTML = "X";
      turn.innerHTML = "O Turn Now";
      getWinner();
      X_or_O += 1;

    } else {
      console.log(X_or_O);
      this.innerHTML = "O";
      turn.innerHTML = "X Turn Now";
      getWinner();
      X_or_O += 1;
    }
  }
}
}

//on the replay button run the replay function when it's clicked
document.getElementById('replay').addEventListener('click', replay);

//For loop which removes the word "win" from the class list, which resets styling. It also clears all the innerHTML from the boxes,
//and it displays the word "Play"
function replay() {
for (var i = 0; i < boxes.length; i++) {
  boxes[i].classList.remove("win");
  boxes[i].innerHTML = "";
  turn.innerHTML = "Play";
  turn.style.fontSize = "25px";
}
}