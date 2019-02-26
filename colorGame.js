 var colors=[
          "rgb(255, 0, 0)",
          "rgb(0, 255, 0)",
          "rgb(0, 0, 255)",
          "rgb(255, 0, 255)", 
          "rgb(255, 255, 0)",
          "rgb(0, 255, 255)",
          ];


  var squares=document.querySelectorAll(".square");
  var pickedColor=colors[3];
  var display=document.getElementById("colorDisplay");
  display.textContent=pickedColor;
  var message=document.getElementById("message");
   
  for(var i=0;i<squares.length;i++){
    //initially provide a color to every square 
      squares[i].style.backgroundColor=colors[i];

    //add an event listener to every square
    squares[i].addEventListener("click",function(){

      //  alert(this.style.backgroundColor);
      var clickedColor=this.style.backgroundColor;
      
      if(clickedColor === pickedColor){
        changedColor(clickedColor);
        message.textContent="correct"
      }else{
        this.style.backgroundColor="black"
       message.textContent="try again"
      }
    })
  }
function changedColor(col){
  for(var i=0;i<squares.length;i++){
    squares[i].style.backgroundColor=col;
  }
}