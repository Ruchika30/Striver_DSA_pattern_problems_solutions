

/* 

1
22
333
4444
55555

*/

function pattern(m) {
    let string = ''

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= i; j++) {
            string = string + i
        }
        string = string + '\n'
    }

    console.log(string);

}


pattern(5)