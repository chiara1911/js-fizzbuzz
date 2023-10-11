


const wrapperEl = document.getElementById('boxWrapper');

for (let i = 1; i < 101; i++) {
    //istruzioni da ripetere
    console.log(i);
let bgBox;
const boxEl = document.createElement('div');
    
    // se divisibile per 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {

        bgBox = 'fizzbuzz' ;
        boxEl.innerHTML = ' Fizzbuzz';
    } else if (i % 5 === 0) {

         bgBox = 'buzz';
         boxEl.innerHTML = ' Buzz';
    } else if (i % 3 === 0) {

        bgBox = 'fizz';
        boxEl.innerHTML = ' Fizz';

    } else {
       bgBox = 'number';
       boxEl.innerHTML = i;
    }
    boxEl.className = `box ${bgBox}`;
    wrapperEl.append(boxEl);
    

}