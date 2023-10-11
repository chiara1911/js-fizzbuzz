


const wrapperEl = document.getElementById('boxWrapper');

for (let i = 1; i < 101; i++) {
    //istruzioni da ripetere
    console.log(i);
    let bgBox;
    const boxEl = document.createElement('div');

    // divisibile per 2, 3 e 5
    if (i % 2 === 0 && i % 3 === 0 && i % 5 === 0) {
        bgBox = 'thirty';
        boxEl.innerHTML = ' Thirty';

        // divisibile per 2 e 3
    } else if (i % 2 === 0 && i % 3 === 0) {
        bgBox = 'six';
        boxEl.innerHTML = ' Six';

        // se divisibile per 3 e 5
    } else if (i % 3 === 0 && i % 5 === 0) {

        bgBox = 'fizzbuzz';
        boxEl.innerHTML = ' Fizzbuzz';

        // se divisibile per 5
    } else if (i % 5 === 0) {

        bgBox = 'buzz';
        boxEl.innerHTML = ' Buzz';

        // se divisibile per 3
    } else if (i % 3 === 0) {

        bgBox = 'fizz';
        boxEl.innerHTML = ' Fizz';
// divisibile per 2
    } else if (i % 2 === 0) {
        bgBox = 'two';
        boxEl.innerHTML = ' Two';
    }
    //numero senza divisori
    else {
        bgBox = 'number';
        boxEl.innerHTML = i;
    }
    boxEl.className = `box ${bgBox} d-flex justify-content-center align-items-center fw-semibold`;
    wrapperEl.append(boxEl);


}