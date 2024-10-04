const apiUrl = "https://api.api-ninjas.com/v1/quotes?category=happiness"


fetch(apiUrl)
.then(response => response.json()) 
.then(data => {
   
    const myData = data;
    console.log(myData); 
  })


let notifications = document.querySelector('.tost-notification')
let button = document.querySelector('.btn')
 let message = [
    "Message one",
    "Message two",
    "Message three",
    "Message four",
]

let types = ["info" , "success", "error"]

button.addEventListener("click",()=> showMessage())

function showMessage( message = null,type = null){
    let newnoti = document.createElement('div');
    newnoti.classList.add('toast')
    newnoti.classList.add(type ? type : getTypeMethod())

    newnoti.innerHTML = message ? message : getMessageMethod()

    notifications.appendChild(newnoti)

    setTimeout(() => {
        newnoti.remove()
    }, 3000);
}

function getTypeMethod(){
   return types[ Math.floor(Math.random()* types.length)]
}

function getMessageMethod(){
   return message [Math.floor(Math.random()* message.length)]
}

