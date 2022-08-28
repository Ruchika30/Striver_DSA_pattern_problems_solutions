

/* 

E
DE
CDE
BCDE
ABCDE

*/


const getChar = (ch) => {
    /* get charcter from ascii code */
    return String.fromCharCode(ch)
}


function pattern(m) {
    let string = ''

    for (let i = 1; i <= m; i++) {
        let ch = 'A'
        let asciiCode = ch.charCodeAt(0) + (m - 1)

        for (let j = 0; j < i; j++) {
            string = string + getChar(asciiCode) + ' '
            asciiCode = asciiCode - 1
        }
        string = string + '\n'
    }

    console.log(string);

}


pattern(5)