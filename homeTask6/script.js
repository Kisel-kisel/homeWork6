function buttonClick(){
    const changeTekst = document.getElementById('elem');
    changeTekst.innerText = 'It done';
}


let mainLet = document.querySelectorAll('p.yyy');
function func(){
    for (let index = 0; index < mainLet.length; index++) {
        mainLet[index].innerText = 'It done';
    }
}
function buttomClick2(){
let changeColor = document.querySelector('#changeColor');
changeColor.style.color = 'green';
}