const yourName = prompt()

function sayHello(firstName,hour){
    let message = "Bonjour " + firstName + "!"
    
    if (hour>=18){
        message = "Bonsoir " + firstName + "!"
    }
    
    document.querySelector("h1").innerText = message
    
    console.log(message)
}

console.log("yourName = " + yourName)

sayHello(yourName,11)
sayHello(yourName,18)
sayHello(yourName,17)