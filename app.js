let inc = document.querySelector('.inc');
let dec = document.querySelector('.dec');
let input = document.querySelector('.input');

inc.addEventListener("click",function(){
    let point = Number(input.value);
    
    if ((point +1) < 11 ) {
        input.value = point + 1; 
    } else {
        inc.style.cursor = "not-allowed";
    }

    if(point > 1){
        dec.style.cursor = 'pointer';
    }
})

dec.addEventListener('click', function(){
    let point = Number(input.value);
    if (point > 1) {
        input.value = point - 1;
        inc.style.cursor = 'pointer';
    }
    else{
        dec.style.cursor = 'not-allowed';
    }
})

let progress = document.querySelector('.progress');
let percent = document.querySelector('.percent');

progress.addEventListener('input', function(){
    let progress_value = Number(progress.value);

    percent.innerHTML = progress_value;
})
let light = document.querySelector('.light');
let navy = document.querySelector('.navy');
let peach = document.querySelector('.peach');
let azure = document.querySelector('.azure');
let random = document.querySelector('.random');
let body = document.querySelector('body');
let container = document.querySelector('.container');
let white = document.querySelector('.default');

    light.addEventListener('click', function(){
        body.style.backgroundImage = 'linear-gradient( to left, #FF4066, #FFF16A)'; 
        // container.style.backgroundColor = '#FFFFF0';
    })
    navy.addEventListener('click', function(){
        body.style.backgroundImage = 'linear-gradient( to right, #0700DE, #DDFFC9)'; 
        // container.style.backgroundColor = '#FFFFF0';
    })
    peach.addEventListener('click', function(){
        body.style.backgroundImage = 'linear-gradient( to right, #FF8473, #FFF9D2)'; 
        // container.style.backgroundColor = '#FFFFF0';
    })
    azure.addEventListener('click', function(){
        body.style.backgroundImage = 'linear-gradient(to right, #0172AF, #74FEBD)'; 
        // container.style.backgroundColor = '#FFFFF0';
    })

    white.addEventListener('click', function(){
        body.style.background = '#fff'; 
        // container.style.backgroundColor = '#FFFFF0';
    })


    random.addEventListener('click' , function(){
let red = Math.floor(Math.random() * 255);
let green = Math.floor(Math.random() * 255);
let blue = Math.floor(Math.random() * 255);

        body.style.background = `rgb(${red}, ${green}, ${blue})`;
        // container.style.backgroundColor = '#FFFFF0';
    })


let btn = document.querySelector('.btn');

    btn.addEventListener('click' , function(){
        alert("Sorry.. Product Out of Stock! ")
    })