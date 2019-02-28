  var totalSquare=6;
  var colors=generateRandomColor(totalSquare);
  var squares=document.querySelectorAll(".square");
  var display=document.getElementById("colorDisplay");
  var heading=document.getElementById("head1");
  var resetButton=document.getElementById("reset");
  var easybutton=document.getElementById("easyClick");
  var hardbutton=document.getElementById("hardClick");

  var pickedColor=pickColor(totalSquare);
  display.textContent=pickedColor;

  var message=document.getElementById("message");
   provideColor(totalSquare);


   resetButton.addEventListener("click",function(){
       colors=generateRandomColor(totalSquare);
    //    provideColor(totalSquare);
       var pickedColor=pickColor(totalSquare);
       display.textContent=pickedColor;
       for(var i=0;i<squares.length;i++){
           squares[i].style.backgroundColor=colors[i];
       }
       heading.style.backgroundColor="white";
   })
    
   easybutton.addEventListener("click",function(){
    easybutton.classList.add("selected");
    hardbutton.classList.remove("selected");
    colors=generateRandomColor(totalSquare/2);
    pickedColor=pickColor(totalSquare/2);
    display.textContent=pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor=colors[i];
        }
        else{
            squares[i].style.display="none";
        }
    }
   })

  
    hardbutton.addEventListener("click",function(){
        hardbutton.classList.add("selected");
        easybutton.classList.remove("selected");
        colors=generateRandomColor(totalSquare);
        pickedColor=pickColor(totalSquare);
        display.textContent=pickedColor;
        
        for(var i=0;i<squares.length;i++){
          squares[i].style.backgroundColor=colors[i];
          squares[i].style.display="block";
        }
    })
 
function provideColor(maxiColor){
  for(var i=0;i<maxiColor;i++){
    /*initially provide a color to every square */
    squares[i].style.backgroundColor=colors[i];

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
}

function changedColor(col){
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=col;
  }
}

function pickColor(maxi){
  var val= Math.floor(Math.random()*maxi);    
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