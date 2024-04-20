const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const countLabel = document.getElementById('countLabel');

let count = JSON.parse(localStorage.getItem('count'));
decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
    saveToStorage();
}
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
    saveToStorage();
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
    saveToStorage();
}
function saveToStorage (){
    localStorage.setItem('count', JSON.stringify(count));
}
console.log(count);

document.getElementById('countLabel').textContent = count;
