
 const ColorCodeContanier = document.getElementById('COLOR-CODE');
 const optioncontanier = document.getElementById('option-contanier');
 const scorecontanier = document.getElementById('Score');
 let randomcolor = null;
 let score = 0;

 function GenerateRandomNumber (min, max) {
    return min + Math.floor(Math.random() * (max - min + 1))
 }; 

 function GenerateRandomColorRGB () {
    const red = GenerateRandomNumber(0, 255);
    const green = GenerateRandomNumber(0, 255);
    const blue = GenerateRandomNumber(0, 255);
    return `rgb(${red}, ${green}, ${blue})`
 };

 function scoreincrement() {
    score += 1;
    scorecontanier.innerText = score;
 }

 function validateresult (el) {
    
    const selectcolor = el.target.style.backgroundColor;
    if(selectcolor === randomcolor) {
        scoreincrement();
    }else {
        score = 0;
    };
    window.localStorage.setItem('score', score);
    startgame();
 }

 function startgame () {
    score =Number (window.localStorage.getItem('score')) ?? 0;
    scorecontanier.innerText = score;
    optioncontanier.innerText = null;
    randomcolor = GenerateRandomColorRGB();
    ColorCodeContanier.innerText = randomcolor;

    const  ansindex = GenerateRandomNumber(0, 5);

    for (let i = 0; i < 6; i++) {
        const div = document.createElement('div');
        div.addEventListener('click', validateresult)
        div.style.backgroundColor =
         i === ansindex ? randomcolor : GenerateRandomColorRGB();
        optioncontanier.append(div);
    }
 }

 window.addEventListener('load', () => startgame());