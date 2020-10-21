import { f1manager } from './f1.js'

//Yılların selecte append olduğu alan
let years = f1manager.getyears();

for (let i = 0; i < years.length; i++) {
    $("#yearsselect").append(`
    <option>`+ years[i] + `</option>
    `)
}

// Roundların append olduğu alan
f1manager.getrounds(2005).then((rounds) => {

    for (let i = 0; i < rounds.length; i++) {
        $("#roundsselect").append(`
        <option>`+ rounds[i] + `</option>
        `)
    }
});



