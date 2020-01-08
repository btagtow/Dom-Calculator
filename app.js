const screen = document.querySelector("#screen")
const buttons = document.querySelector('.buttons')

buttons.addEventListener('click', (event) => {
    
    const clickedButton = event.target.innerHTML
    
    function clearScreen(){
        screen.innerHTML=""
    } 

    if (clickedButton!=="C" && clickedButton!=="="){
        asInteger = parseInt(clickedButton)
        if (asInteger){
            screen.append(asInteger)
        }
        // if (Number.isInteger(asInteger)){
        //     screen.append(asInteger)}
        else if (clickedButton==="+"){
            screen.append("+")}
        else if (clickedButton==="-"){
            screen.append("-")}
        else if (clickedButton==="÷"){
            screen.append("/")}
        else if (clickedButton==="x"){
            screen.append("*")}
    } else if (clickedButton=="C"){
        clearScreen()
    } else if (clickedButton=="="){
        const solution = eval(screen.innerHTML)
        clearScreen()
        screen.append(solution)
    }

})
