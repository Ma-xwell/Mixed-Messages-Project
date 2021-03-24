//this is a random message generator

const randomNum = x => {
    return Math.floor(Math.random()*3)};
//returns random number from 0 to 2

let firstM = ['I wish you have a', 'Have a', 'Hope you have a'];
let secondM = ['nice', 'good', 'amazing'];
let thirdM = ['day', 'week', 'evening tonight'];
//three arrays containing parts of the final sentence

const generate = () => {
let first = firstM[randomNum()];
let second = secondM[randomNum()];
let third = thirdM[randomNum()];

if (second[0] !== 'a'){
    console.log (first + ' ' + second + ' ' + third + '.');
} 
else { console.log (first + 'n ' + second + ' ' + third + '.'); }
}
//generates final random sentence

generate ();