const screen = document.querySelector("#screen")
const buttons = document.querySelector('.buttons')

buttons.addEventListener('click', (event) => {  
    console.log(event.target) 
    let clickedButtonText = event.target.textContent
    let screenContents = screen.textContent
    
    let firstCharacterOnScreen = screenContents.charAt(0)
    let lastCharacterOnScreen = screenContents.charAt(screenContents.length-1)
    function addToScreen(click){screen.append(`${click}`)}

    if (!isNaN(clickedButtonText)){
        addToScreen(clickedButtonText)
    } else if (clickedButtonText==="x"){
        addToScreen('*')
    } else if (clickedButtonText==="÷"){
        addToScreen('/')
    } else if (clickedButtonText==="+"){
        addToScreen('+')
    } else if (clickedButtonText==="-"){
        addToScreen('-')
    } else if (clickedButtonText==="C"){
        clearScreen()
    } else if (clickedButtonText==="="){
        if (operatorTester(firstCharacterOnScreen, lastCharacterOnScreen)){
            clearScreen()
            screen.textContent="Error"} else {
            let solution = eval(screenContents)
            clearScreen()
            screen.append(solution)
            }
        }
    } 
)

function operatorTester(first, second){
    if (first==="+" || first==="-" || first==="*" || first==="/" || second==="+" || second==="-" || second==="*" || second==="/"){
        return true
    } else {return false}
}

function clearScreen(){
    screen.textContent=""
}


// clickedButtonText!=="C" && clickedButtonText!=="=" && clickedButtonText!=="x" && clickedButtonText!=="÷")