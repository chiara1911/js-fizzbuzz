


const wrapperEl = document.getElementById('boxWrapper');

for (let i = 1; i < 101; i++) {
    //istruzioni da ripetere
    console.log(i);

    // se divisibile per 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {

        // bgBox = --color-bg-fizzbuzz
        // Text = fizzbuzz;
    } else if (i % 5 === 0) {

        // bgBox = --color-bg-buzz:
        // Text = buzz;
    } else if (i % 3 === 0) {

        // bgBox = --color-bg-fizz:
        // text = fizz

    } else {
        // bgBox = --color-bg-blue
        //    text = i
    }

}