

/* 

12345
1234
123
12
1

*/


function pattern(m) {
    let string = ''

    for (let i = m; i > 0; i--) {
        for (let j = 1; j <= i; j++) {
            string = string + j
        }
        string = string + '\n'
    }

    console.log(string);

}


pattern(5)