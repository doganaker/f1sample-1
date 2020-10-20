const url = 'https://ergast.com/api/f1/'
const f1manager = {

    getraces: (year, round) => {
        fetch(url + year + '/' + round + '/results.json')
            .then((res) => res.json())
            .then((data) => {

            })
    }

}




function getraces2(year, round) {
    fetch(url + year + '/' + round + '/results.json')
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
}


let x = getraces2(2008,1);
// console.log(x);
