//Declare your variables

let numbers = [1, 2, 3, 6, 9, 8, 7, 4];
let cells = [1, 2, 3, 6, 9, 8, 7, 4];

let clockwise = document.getElementById('btn5');
let antiClockwise = document.querySelectorAll('.btn');


clockwise.onclick = () => {
    numbers.unshift(numbers.pop());
    for (i = 0; i <= 7; i++) {
        document.getElementById('btn' + cells[i]).innerHTML = numbers[i];

    }


};

antiClockwise.forEach((elementClicked) => {
    elementClicked.addEventListener('click', () => {
        numbers.push(numbers.shift());
        for (var i = 0; i <= 7; i++) {
            document.getElementById('btn' + cells[i]).innerHTML = numbers[i];
        };
    })
});