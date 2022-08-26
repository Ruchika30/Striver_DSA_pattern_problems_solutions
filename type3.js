

/* 

1
12
123
1234
12345

*/


function pattern(m) {
    let string = ''

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= i; j++) {
            string = string + j
        }
        string = string + '\n'
    }

    console.log(string);

}


pattern(5)