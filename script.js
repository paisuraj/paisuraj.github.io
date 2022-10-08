//bound to button onclick
function changeWord(){
    let userInput = document.getElementById('adjective-input').value

    //change the inner HTML of adjective element
    document.getElementById('adjective').innerHTML = userInput
}

//bound to input field oninput
function toggleWordColor(){
    let adjective = document.getElementById('adjective')
    let hasSalmon = adjective.className === 'salmon'

    if (hasSalmon){
        adjective.className = 'blue'
    }
    else{
        adjective.className = 'salmon'
    }

}