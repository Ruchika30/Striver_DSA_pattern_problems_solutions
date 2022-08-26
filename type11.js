/* 

1
01
101
0101
10101

*/

const isOdd = (num) => {
    return (num % 2) != 0
}


function pattern(m) {
    let string = ''
    let k = 0

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= i; j++) {

            // If i , j are odd or if both are even, then show 1
            if ((isOdd(i) && isOdd(j)) || (!isOdd(i) && !isOdd(j))) {
                string = string + 1
            }


            else string = string + 0
        }


        string = string + '\n'
    }

    console.log(string);

}


pattern(5)