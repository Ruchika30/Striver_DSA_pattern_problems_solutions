/* 

     A
    ABA
   ABCBA
  ABCDCBA

*/

const getChar = (ch) => {
    /* get charcter from ascii code */
    return String.fromCharCode(ch)
}


function pattern(m) {
    let string = ''



    for (let i = 0; i <= m; i++) {
        let ch = 'A'
        let asciiCode = ch.charCodeAt(0)

        //spaces 
        for (let j = 0; j < m - i; j++) {
            string = string + ' '
        }

        // characters of first half pyramid
        for (let k = 0; k < i; k++) {
            let m = 0
            string = string + getChar(asciiCode)
            asciiCode = asciiCode + 1
        }

        // characters of second  half pyramid
        asciiCode = asciiCode - 1
        for (let m = i - 1; m > 0; m--) {
            asciiCode = asciiCode - 1
            string = string + getChar(asciiCode)

        }
        string = string + '\n'

    }

    return string
}


console.log(pattern(5))