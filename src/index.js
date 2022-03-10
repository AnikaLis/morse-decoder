const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let morzeLetter = [];
    let char;
    let result = [];
    let sum;
    let sent = '';
    for (let j = 0; j < expr.length; j = j + 10) {
        char = expr.substr(j, 10);
        if (expr[j] == '*') {
            result.push(' ');
        } else {
            for (let i = 0; i < char.length; i = i + 2) {            
                (char[i] == 1) ? (char[i + 1] == 1 ? morzeLetter.push('-') : morzeLetter.push('.')) : morzeLetter;
            }
            result.push(morzeLetter.join(''));
        }
        morzeLetter = []; 
    }
        result.map(letter => {
            if (letter !== ' ') {
                sum = MORSE_TABLE[letter];
                console.log(sum);
            } else {
                sum = ' ';
            }
            sent = `${sent}${sum}`;
        });
    return sent;
}

module.exports = {
    decode
}