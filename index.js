const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const main = document.getElementById('main');
const total = document.getElementById('total-h2');
let counter = 0;

increaseBtn.addEventListener('click', function(){
    counter ++
    total.innerHTML = counter
    if(counter >= 20){
        increaseBtn.classList.remove('increase')
        increaseBtn.classList.add('hot-btn')
        decreaseBtn.classList.remove('decrease')
        decreaseBtn.classList.add('hot-btn')
        total.classList.remove('total-h2')
        total.classList.add('hot-text')
        main.classList.remove('main')
        main.classList.add('hot-main')

    } else if(counter <20 && counter >=0){
        increaseBtn.classList.remove('cold-btn')
        increaseBtn.classList.add('increase')
        decreaseBtn.classList.remove('cold-btn')
        decreaseBtn.classList.add('decrease')
        total.classList.remove('cold-text')
        total.classList.add('total-h2')
        main.classList.remove('cold-main')
        main.classList.add('main')
    }
});

decreaseBtn.addEventListener('click', function(){
    counter --
    total.innerHTML = counter
    if(counter <20 && counter >=0){
        increaseBtn.classList.remove('hot-btn')
        increaseBtn.classList.remove('cold-btn')
        increaseBtn.classList.add('increase')
        decreaseBtn.classList.remove('hot-btn')
        decreaseBtn.classList.remove('cold-btn')
        decreaseBtn.classList.add('decrease')
        total.classList.remove('hot-text')
        total.classList.remove('cold-text')
        total.classList.add('total-h2')
        main.classList.remove('hot-main')
        main.classList.remove('cold-main')
        main.classList.add('main')
    }
    else if(counter <=0) {
        increaseBtn.classList.remove('increase')
        increaseBtn.classList.add('cold-btn')
        decreaseBtn.classList.remove('decrease')
        decreaseBtn.classList.add('cold-btn')
        total.classList.remove('total-h2')
        total.classList.add('cold-text')
        main.classList.remove('main')
        main.classList.add('cold-main')
    }
});