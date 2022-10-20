var string ="";
let boxes =document.querySelectorAll('.box')
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
    

    function myFunction() {
      if(string.length == 4 && string=="1994"){
                        alert('Your password is correct')
                    } else if(string.length == 4  && string!=="1994"){
                     alert("Oops wrong password")
                        } 
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

