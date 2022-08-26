

/* 

                     
                         ******* 
                          ***** 
                           *** 
                            *

*/

function pattern(m) {
    let string = ''


    for (let i = m; i > 0; i--) {
        // spaces
        for (let j = 0; j < m - i; j++) {
            string = string + ' '
        }

        // stars
        for (let j = 0; j < i; j++) {
            string = string + '*'
        }


        // stars
        for (let j = 0; j < i - 1; j++) {
            string = string + '*'
        }

        string = string + '\n'
    }

    console.log(string);

}


pattern(5)