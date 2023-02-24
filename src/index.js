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
    let result = '';
    const morseCodeMap = {
      '10': '.',
      '11': '-',
      '00': '',
      '**********': ' '
    };
    for (let i = 0; i < expr.length; i += 10) {
      const substr = expr.slice(i, i + 10);
      const morseCode = substr.replace(/00|10|11|\*{10}/g, match => morseCodeMap[match]);
      if (morseCode === ' ') {
        result += ' ';
      } else {
        const decodedChar = MORSE_TABLE[morseCode];
        result += decodedChar;
      }
    }
    return result;
  }
  
  
  

module.exports = {
    decode
}