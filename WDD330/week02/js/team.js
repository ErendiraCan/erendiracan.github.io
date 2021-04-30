function factorial() {
    let input = document.getElementById("numbera").value;
    let result = 0;
    for (var i = 1; i <= input; i++) {
        result += i;
    }
    console.log (result);
    document.getElementById("adding").innerText = result;
    return result;
}

function add() {
    let numA = document.getElementById("numbera").value;
    let numB = document.getElementById("numberb").value;
    let result = numA + numB;
    document.getElementById("adding").innerText = result;
    return result;
}