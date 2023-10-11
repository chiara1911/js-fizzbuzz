


const wrapperEl = document.getElementById('boxWrapper');

for (let i = 1; i < 101; i++) {
    //istruzioni da ripetere
    console.log(i);
let bgBox;
    // se divisibile per 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {

        bgBox = 'fizzbuzz' ;
        // Text = fizzbuzz;
    } else if (i % 5 === 0) {

         bgBox = 'buzz';
        // Text = buzz;
    } else if (i % 3 === 0) {

        bgBox = 'fizz';
        // text = fizz;

    } else {
       bgBox = 'number';
        //    text = i;
    }
    const boxEl = document.createElement('div');
    boxEl.className = `box ${bgBox}`;
    wrapperEl.append(boxEl);
}