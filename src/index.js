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
    // write your solution here
	let str = '';
	while (true) {
		const codeStr = expr.substring(0, 10);
		if ( codeStr === "**********" ) {
			str = str + " ";
		} else {
			let codeMorse = '';
			for (i=1; i<6; i++) {
				const simbol = codeStr.substring((i*2)-2, (i*2));
				if ( simbol === '10' ) {
					codeMorse = codeMorse + '.';
				} else if ( simbol === '11' ) {
					codeMorse = codeMorse + '-';
				}	
			}
			str = str + MORSE_TABLE[codeMorse];
		}	
		expr = expr.substring(10);
		if ( expr.length === 0 ) {
			break;
		}
	}
    return str;
}

module.exports = {
    decode
}