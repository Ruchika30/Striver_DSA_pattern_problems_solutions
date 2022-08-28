

/* 

A
BB
CCC
DDDD
EEEEE

*/

const getChar = (ch) => {

    /* get charcter from ascii code */
    return String.fromCharCode(ch)
}


function pattern(m) {
    let string = ''
    let ch = 'A'
    let asciiCode = ch.charCodeAt(0)

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= i; j++) {
            string = string + getChar(asciiCode)

        }

        string = string + '\n'
        asciiCode = asciiCode + 1
    }

    console.log(string);

}


pattern(5)