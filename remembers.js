const $div = document.querySelector('.input');
const $input = document.querySelector('.inp');
const $adder = document.querySelector('.add');
const $timer = document.querySelector('.timer');
const $reset = document.querySelector('.reset');

let counter = 0;

$adder.addEventListener('click', () => { 
    const time = $timer.value;
    const inp = $input.value
    $div.insertAdjacentHTML('beforeend', `<p class="clas${counter}">Напоминание: ${inp}</p> <p>На активность было выделенно : ${time} секунд</p>`);

    function setTimer() {
        const $color = document.querySelector(`.clas${counter}`);

        $color.classList.add('color_red');
        alert('Время выделеное на текущую задачу истекло')

        counter++
    }
        setTimeout(setTimer, +time * 1000) 
})

$reset.addEventListener('click', () => {
    $P = document.querySelectorAll('p');
    
    for(let c in $P) {
        $P[c].remove()
    }
})
