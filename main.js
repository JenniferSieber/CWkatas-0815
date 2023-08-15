// 6kyu, 7kyu, 8kyu
// KATA 1 7kyu
// https://www.codewars.com/kata/559e5b717dd758a3eb00005a
const dropCap = n => n.split(' ').map(word => word.length > 2 && word != '' ? `${word[0].toUpperCase()}${word.slice(1).toLowerCase()}` : word).join(' ');

console.log(dropCap("SeklBAPdSqqPsEf bH rGNQNDOubKAhH"));
console.log(dropCap('Apple Banana'));
console.log(dropCap('rAnDoM CaPs CrAzInEsS'));


// KATA 2 7kyu
// https://www.codewars.com/kata/57d1f36705c186d018000813/train/javascript
const gordon = a => a.toUpperCase().split(' ')
    .map(word => word.replace(/[/[A]/g, '@').replace(/[EIOU]/g, '*') + '!!!!').join(' ');

console.log(gordon('Hells Kitchen')); 
console.log(gordon('i am a chef')); 

// KATA 3 7kyu
// https://www.codewars.com/kata/5ace2d9f307eb29430000092/train/javascript
const modifyMultiply =(str,i,n) => Array(n).fill(str.split(' ')[i]).join('-');


console.log(modifyMultiply("This is a string", 3, 5));
console.log(modifyMultiply("Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.", 6, 8));

// KATA 4 7kyu
// https://www.codewars.com/kata/57ebaa8f7b45ef590c00000c/train/javascript
const switcher = x => {
  return x.map(el => {
    if (el == 27) return '!'
    if (el == 28) return '?';
    if (el == 29) return ' ';
    return String.fromCharCode(97 + 26 - parseInt(el))
  }).join('');
}

console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));  
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']));  

// KATA 5 7kyu
// https://www.codewars.com/kata/565b112d09c1adfdd500019c/train/javascript
const nthChar = words => words.map((word, i) => {
    return word[i];
  }).join('');

console.log(nthChar([]));
console.log(nthChar(['yoda', 'best', 'has']));