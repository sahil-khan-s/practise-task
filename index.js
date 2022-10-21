var string = "";
var boxes = document.querySelectorAll('.box')
Array.from(boxes).forEach((box) => {
    box.addEventListener('click', (e) => {
        if(e.target.innerHTML=='='){
            string=eval(string);
            document.querySelector('input').value = string;
        }
        string = string + e.target.value
        document.querySelector('input').value = string.slice(0, 8);
        //  if (string.length>4){
        //     alert("Warning")
        //  } 
        // if (string.length >= 4) {
        //     alert("You Have Reached Your Limit")
        // }
      console.log(string)
    })
})

//   code for checking the pin 

function myFunction() {
    if (string.length == 4 && string == "1994") {
        alert('Your Password Is Correct')
    } else if (string.length == 4 && string !== "1994") {
        alert("Oops Wrong Password")
    } else if (string.length > 4) {
        alert("You Are Not Allowed To Enter More Than 4 Digits")
    }
}

//  code for backspace
function delete_num() {
    var input, num;
    input = document.getElementById('number_input');
    num = input.value;
    input.value = num.substr(0, num.length - 1);
    return false;
}

window.onload = () => {
    if (restart) {
        // Do something
        sessionStorage.clear() // This cleans all the session storage

        // If you want to  remove ONLY the item from the storage use:
        sessionStorage.removeItem("restart")
    }
};

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

