var string ="";
var boxes =document.querySelectorAll('.box')
Array.from(boxes).forEach((box)=>{
    box.addEventListener('click',(e)=>{
        string = string + e.target.value
       document.querySelector('input').value= string;
        
      
       if(string.length==4){
           alert("You have reached ur limit")
       }
            console.log(string)
        })
       
    })
    
        //    code for checking the pin 
    function myFunction() {
      if(string.length == 4 && string=="1994"){
                        alert('Your password is correct')
                    } else if(string.length == 4  && string!=="1994"){
                     alert("Oops Wrong Password")
                        } else if(string.length>4) {
                            alert("you are not Allowed to enter More than 4 digit")
                        }
      }
    //   code for backspace
      function delete_num() {
        var input, num;
        input = document.getElementById('number_input');
        num = input.value;
        input.value = num.substr(0,num.length-1);
        return false;
      }




// var string ="";
// let boxes =document.querySelectorAll('.box')
// Array.from(boxes).forEach((box)=>{
//     box.addEventListener('click',(e)=>{
//         string = string + e.target.value
//         if(string.length == 4 && string=="1994"){
//             alert('Your password is correct')
//         } else if(string.length == 4 && string!=="1994"){
//          alert("Oops wrong password")
//             }
//             console.log(string)
//     })
// })

