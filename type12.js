/* 

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15

*/

function pattern(m) {
    let string = ''
    let k = 1

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j < i; j++, k++) {
            string = string + k + ' '
        }
        string = string + '\n'
    }

    console.log(string);

}


pattern(5)