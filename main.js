let input = document.getElementById("input")

function display(num) {
    input.value += num
}
function Clear() {
    input.value = ""
}


function Calc() {

    try {
        input.value = eval(input.value)
    }
    catch (err) {
        input.value = "error"
    }
    
}


















