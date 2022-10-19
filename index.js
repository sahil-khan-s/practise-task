var boxes = document.getElementsByClassName.box;
var dragSrcEl;
function start_game(){
    var parent = document.getElementById("box-container");
    var divs = parent.children;                 
    var frag = document.createDocumentFragment(); 
    while (divs.length) { 
    frag.appendChild(divs[Math.floor(Math.random()* divs.length)]);       
    }
    parent.appendChild(frag);
    console.log(parent);
    starterr();   
     }
     function handleDragStart(e) {
        this.style.opacity = '0.3';
      dragSrcEl = this; //this refers to the box being draged  
        e.dataTransfer.effectAllowed = 'move';        
        e.dataTransfer.setData('text/html', this.innerHTML);
      }
      function handleDragEnd(e) {
        this.style.opacity = '1';     
      }   
      function handleDragOver(e) {
        e.preventDefault();
        return false;
      }
      function handleDrop(e) {        
          if (dragSrcEl !== this) {
              dragSrcEl.innerHTML = this.innerHTML ;
              this.innerHTML = e.dataTransfer.getData('text/html');
            }
          return false;
        }   
      let items = document.querySelectorAll('.container .box');
      items.forEach(function(item) {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('drop', handleDrop);
      });
      function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);     
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            display.textContent = minutes + ":" + seconds;
            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
      }    
      starterr = function () {
        var twoMinutes = 60 * 2,
            display = document.querySelector('#time');
        startTimer(twoMinutes, display);    
      };
      function Timer()
    {
         alert("You are out of time! try again");
        //  document.getElementById("time").disabled = true;
      
    }

     