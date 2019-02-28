  var totalSquare=6;
  var colors=[];
  var pickedColor;
  var colors=generateRandomColor(totalSquare);
  var squares=document.querySelectorAll(".square");
  var display=document.getElementById("colorDisplay");
  var heading=document.getElementById("head1");
  var resetButton=document.getElementById("reset");
  var modeButtons=document.querySelectorAll(".mode");
   pickedColor=pickColor();
  display.textContent=pickedColor;

  var message=document.getElementById("message");
//    provideColor(totalSquare);
init();

function init(){
    // event listener bt
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
              modeButtons[0].classList.remove("selected");
              modeButtons[1].classList.remove("selected");
              this.classList.add("selected");
              this.textContent==="Easy" ? totalSquare=3 : totalSquare=6;
              console.log(totalSquare);
              reset();
       })
    }

    for(var i=0;i<squares.length;i++){
    
        /*add an event listener to every square*/
        squares[i].addEventListener("click",function(){
    
          /*  console.log(this.style.backgroundColor);*/
          var clickedColor=this.style.backgroundColor;
    
          if(clickedColor === pickedColor){
          
            changedColor(clickedColor);
            message.textContent="correct";
            resetButton.textContent="Play Again";
            heading.style.backgroundColor=clickedColor;
          }
          else{
            this.style.backgroundColor="black";
            message.textContent="try again";
          }
        })
      }
      reset();
    
}


  


  function reset(){
       colors=generateRandomColor(totalSquare);
       pickedColor=pickColor();
       display.textContent=pickedColor;
       console.log(totalSquare);
       for(var i=0;i<squares.length;i++){
           if(colors[i]){
           squares[i].style.backgroundColor=colors[i];
           squares[i].style.display="block";   
           }else{
            squares[i].style.display="none";
           }
      }
       message.textContent="";
       resetButton.textContent="New Colors";             /* we can also use this.textContent to change the content because you are inside an event listener*/
       heading.style.backgroundColor="steelblue";      
  }

   resetButton.addEventListener("click",function(){
       reset();
   })
    
  


function changedColor(col){
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=col;
  }
}

function pickColor(){
  var val= Math.floor(Math.random()*colors.length);    
  return colors[val];
}

function generateRandomColor(maximum){
 var arr=[];
  for(var i=0;i<maximum;i++){
    arr.push(generateColor());
  }
  return arr;
}

function generateColor(){
  /*Because we have to select from 0-255 and Math.random() will give us no. between 0-1 so when multiply with 256 ,
  it will give at max 255.9999 so after Math.floor() function calling no. will be between 0-255*/
  var r=Math.floor(Math.random()*256);
  var g=Math.floor(Math.random()*256);
  var b=Math.floor(Math.random()*256);
  return "rgb(" + r +', '+ g + ', '+ b + ")";
}