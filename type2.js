

/* 

*
★★
***
****
*****

*/

function pattern(m) {
    let string = ''

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j < i; j++) {
            string = string + '*'
        }
        string = string + '\n'
    }

    console.log(string);

}


pattern(5)