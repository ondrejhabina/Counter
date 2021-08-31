let count = 0;
let countNum = document.getElementById('number');
//element.addEventListener("click", ());
function addition () {
    count = document.getElementById('number').innerHTML = count + 1;
    if (count < 0) {
        countNum.style.color = 'crimson';
    } else if (count > 0) {
        countNum.style.color = 'green';
    } else if (count == 0) {
        countNum.style.color = 'black';
    }
    return count;
}

function subtraction () {
    count = document.getElementById('number').innerHTML = count - 1;
    if (count < 0) {
        countNum.style.color = 'crimson';
    } else if (count > 0) {
        countNum.style.color = 'green';
    } else if (count == 0) {
        countNum.style.color = 'black';
    }
    return count;
}

function reset () {
    countNum.innerHTML = 0;
    countNum.style.color = 'black';
    count = 0;
}