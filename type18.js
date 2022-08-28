



/* 

**********
★★★★  ★★★★
***    ***
★★      ★★
*        *    
*        *   
★★      ★★
***    ***
****  ****
**********


*/

function pattern(m) {
    let string = ''

    //top half pyramid
    for (let i = m; i > 0; i--) {

        for (let j = 0; j < i; j++) {
            string = string + '*'
        }

        for (let j = 0; j < 2 * (m - i); j++) {
            string = string + ' '
        }


        for (let j = 0; j < i; j++) {
            string = string + '*'
        }

        string = string + '\n'
    }

    //second half pyramid
    for (let i = 0; i <= m; i++) {

        for (let j = 0; j < i; j++) {
            string = string + '*'
        }

        for (let j = 0; j < 2 * (m - i); j++) {
            string = string + ' '
        }


        for (let j = 0; j < i; j++) {
            string = string + '*'
        }



        string = string + '\n'
    }


    console.log(string);

}

pattern(5)